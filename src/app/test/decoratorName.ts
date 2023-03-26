import { noop, Observable } from "rxjs"
import { timeout } from "rxjs/operators"
import { delay } from "../module/anguler-hydrogen/util/std-tool"

export function DecoratorName(value: any) {

  let result = function (
    target: Object,
    key: string | symbol, // 名稱
    descriptor: PropertyDescriptor
  ) {
    console.log('DecoratorName get', target, key)
    return descriptor
  }
  return result
}

let busyRecordDict = {

}

// https://levelup.gitconnected.com/start-writing-your-own-typescript-method-decorators-c921cdc3d1c1
export function CheckWait(
  {
    uuid = `${Math.random()}`,
    timeoutms = 1000,
  }) {

  let result = function (
    target: Object,
    key: string | symbol, // 名稱
    descriptor: PropertyDescriptor
  ) {

    const childFunction = descriptor.value

    descriptor.value = (...args: any[]) => {
      if (busyRecordDict[uuid]) {
        console.log(`Busy ${uuid}`, key)
        return null
      }

      const enable = () => { busyRecordDict[uuid] = false }

      let result = childFunction.apply(this, args)
      if (typeof result.subscribe === 'function') {
        busyRecordDict[uuid] = true
        let _ = (<Observable<any>>result)
        .pipe(timeout(timeoutms))
        .subscribe({
          next: noop,
          complete: enable,
          error: enable
        })
      } else if (typeof result.then === 'function') {
        busyRecordDict[uuid] = true
        Promise.race([
          <Promise<any>>result,
          delay(timeoutms),
        ])
        .then(enable).catch(enable)
      }
      return result
    }
    return descriptor
  }
  return result
}

import { ElementRef, Renderer2 } from "@angular/core"

export function changeColorDisabled(
  render: Renderer2,
  elementRef: ElementRef,
  isDisabled: boolean,
  color: string = 'red'
) {
  if (isDisabled) {
    // render.setAttribute(
    //   elementRef.nativeElement,
    //   'disabled',
    //   'true'
    // )
    render.setStyle(
      elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }
  else {
    // render.removeAttribute(
    //   elementRef.nativeElement,
    //   'disabled'
    // )
    render.removeStyle(
      elementRef.nativeElement,
      'backgroundColor'
    )
  }
}

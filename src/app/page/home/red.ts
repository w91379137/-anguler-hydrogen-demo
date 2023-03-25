import { ElementRef, Renderer2 } from "@angular/core"

export function changeRedDisabled(
  render: Renderer2,
  elementRef: ElementRef,
  isDisabled: boolean,
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
      'red'
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

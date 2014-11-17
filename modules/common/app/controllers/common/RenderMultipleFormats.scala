package controllers.common

import play.api.data.Form
import play.api.libs.json.Json
import play.api.mvc.{Call, RequestHeader, Controller}
import play.twirl.api.Html

trait RenderMultipleFormats[T] extends Controller {

  protected def handleError(formWithErrors: Form[T], html: Html)(implicit request: RequestHeader) = render {
    case Accepts.Html() => BadRequest(html)
    case Accepts.Json() => BadRequest(toJson(formWithErrors))
  }

  protected def handleSuccess(call: Call, flashMessage: String,  properties: Map[String, String] = Map())
  	(implicit request: RequestHeader) = render {
    case Accepts.Html() => Redirect(call).flashing("success" -> flashMessage)
    case Accepts.Json() => Ok(Json.obj("status" -> "Ok", "properties" -> Json.toJson(properties)))
  }

  private def toJson(formWithErrors: Form[T]) = {
    Json.obj(
      "status" -> "Ko",
      "errors" -> formWithErrors.errorsAsJson)
  }
}

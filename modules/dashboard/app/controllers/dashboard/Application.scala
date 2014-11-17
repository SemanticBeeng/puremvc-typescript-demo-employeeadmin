package controllers.dashboard

import play.api.mvc.Action
import controllers.dashboard.routes._
import controllers.common.JsRouteGenerator

object Application extends JsRouteGenerator[javascript] {

  def index = Action {
    Ok(views.html.dashboard.index("Your new application is ready."))
  }

  override def jsRouteClass: Class[javascript] = {
    classOf[javascript]
  }

}

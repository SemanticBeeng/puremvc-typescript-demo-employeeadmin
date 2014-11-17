package controllers.common

import controllers.routes._

/**
 *
 */
object Application extends JsRouteGenerator[javascript] {

  override def jsRouteClass: Class[javascript] = {
    classOf[javascript]
  }

}

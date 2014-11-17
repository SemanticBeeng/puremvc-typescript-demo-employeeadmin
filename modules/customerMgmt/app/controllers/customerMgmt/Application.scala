package controllers.customerMgmt

import controllers.common.JsRouteGenerator
import controllers.customerMgmt.routes._

/**
 *
 */
object Application extends JsRouteGenerator[javascript] {

  override def jsRouteClass: Class[javascript] = {
    classOf[javascript]
  }

}

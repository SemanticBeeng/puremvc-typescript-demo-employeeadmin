package modules.customerMgmt.app.controllers

/**
 *
 */
object Application extends JsRouteGenerator {

  import modules.customerMgmt.app.controllers.routes._javascript

  override def jsRouteClass: Class[javascript] = {
    classOf[javascript]
  }

}

import play.api._
import play.api.mvc._
import play.api.mvc.Results._
import scala.concurrent.Future

object Global extends GlobalSettings {

/*
  @todo use this after figuring out how to not hide routes from modules outside 'dashboard'
  Maybe find a way to include all modules under 'dashboard' ... but then they would not be independent anymore
  See http://typesafe.com/activator/template/play-multidomain-seed

  private def getSubdomain (request: RequestHeader) = request.domain.replaceFirst("[\\.]?[^\\.]+[\\.][^\\.]+$", "")

  override def onRouteRequest (request: RequestHeader) = getSubdomain(request) match {
    case "admin" => admin.Routes.routes.lift(request)
    case _ => dashboard.Routes.routes.lift(request)
  }

  // 404 - page not found error
  override def onHandlerNotFound (request: RequestHeader) = getSubdomain(request) match {
    case "admin" => GlobalAdmin.onHandlerNotFound(request)
    case _ => GlobalDashboard.onHandlerNotFound(request)
  }

  // 500 - internal server error
  override def onError (request: RequestHeader, throwable: Throwable) = getSubdomain(request) match {
    case "admin" => GlobalAdmin.onError(request, throwable)
    case _ => GlobalDashboard.onError(request, throwable)
  }

  // called when a route is found, but it was not possible to bind the request parameters
  override def onBadRequest (request: RequestHeader, error: String) = getSubdomain(request) match {
    case "admin" => GlobalAdmin.onBadRequest(request, error)
    case _ => GlobalDashboard.onBadRequest(request, error)
  }
*/

}
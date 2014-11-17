//import com.typesafe.sbt.web.SbtWeb.autoImport.Assets
import play.PlayImport._
import sbt.Keys._
import sbt._
//import com.typesafe.sbt.less.Import.LessKeys

/**
 * https://www.playframework.com/documentation/2.2.x/RequireJS-support
 * https://www.playframework.com/documentation/2.3.x/RequireJS-support
 *
 * https://www.playframework.com/documentation/2.0.x/Assets
 * http://www.webjars.org/documentation
 *
 * https://www.playframework.com/documentation/2.3.3/SBTSubProjects
 * https://www.playframework.com/documentation/2.3.4/Migration23
 * https://github.com/requirejs/example-multipage-shim
 * https://github.com/requirejs/example-multipage
 *
 * todo
 * https://github.com/webjars/typeaheadjs
 */
object Root {
  def appName = "PureMVC-TypeScript-Play-Demo-EmployeeAdmin"

  // Common settings for every project
  def settings (theName: String) = Seq(
    name := theName,
    organization := "SemanticBeeng.com",
    version := "1.0-SNAPSHOT",
    scalaVersion := "2.11.2",
    doc in Compile <<= target.map(_ / "none"),
    scalacOptions ++= Seq("-feature", "-deprecation", "-unchecked", "-language:reflectiveCalls")
  )
  // Settings for the app, i.e. the root project
  val appSettings = settings(appName)
  // Settings for every module, i.e. for every subproject
  def moduleSettings (module: String) = settings(module) ++: Seq(
    javaOptions in Test += s"-Dconfig.resource=application.conf"
  )
  // Settings for every service, i.e. for admin and web subprojects
  def serviceSettings (module: String) = moduleSettings(module) ++: Seq(
    //includeFilter in (Assets, LessKeys.less) := "*.less",
    //excludeFilter in (Assets, LessKeys.less) := "_*.less",
    //@todo pipelineStages := Seq(rjs, digest, gzip),
    //@todo RjsKeys.mainModule := s"main-$module"
  )

  val commonDependencies = Seq(
    cache,
    ws,
//    "org.webjars" % "jquery" % "2.1.1",
//    "org.webjars" % "bootstrap" % "3.2.0",

    "org.webjars" %% "webjars-play" % "2.3.0-2",
    //"org.webjars" % "requirejs" % "2.1.15",
    "org.webjars" % "jquery" % "2.1.1",
    //"org.webjars" % "jquery" % "1.9.1",

    //"org.webjars" % "jquery-migrate" % "1.2.1",

    "org.webjars" % "jquery-ui" % "1.11.1",
    //"org.webjars" % "jquery-ui" % "1.9.1",

    //"org.webjars" % "jqgrid" % "4.6.0",
    //"org.webjars" % "jqgrid" % "4.4.5",

    "org.webjars" % "underscorejs" % "1.6.0-3"
    // "org.webjars" % "requirejs" % "2.1.14-1"
    // Add here more common dependencies:
    // jdbc,
    // anorm,
    // ...
  )
}
//object Build extends Build {
//
//  // this does not take effect ?? scalaVersion := "2.11.2"
//
//  val appName = "PureMVC-TypeScript-Play-Demo-EmployeeAdmin"
//  val appVersion = "1.0-SNAPSHOT"
//
//  val clientDependencies = Seq(
//    //    filters,
//    //    cache,
//    "org.webjars" %% "webjars-play" % "2.3.0-2",
//    //"org.webjars" % "requirejs" % "2.1.15",
//    "org.webjars" % "jquery" % "2.1.1",
//    //"org.webjars" % "jquery" % "1.9.1",
//
//    //"org.webjars" % "jquery-migrate" % "1.2.1",
//
//    "org.webjars" % "jquery-ui" % "1.11.1",
//    //"org.webjars" % "jquery-ui" % "1.9.1",
//
//    //"org.webjars" % "jqgrid" % "4.6.0",
//    //"org.webjars" % "jqgrid" % "4.4.5",
//
//    "org.webjars" % "underscorejs" % "1.6.0-3"
//  )
//
//  lazy val common = project.in(file("modules/common"))
//
//  lazy val customerMgmt = project.in(file("modules/customerMgmt"))
//
//  val main = Project(appName, file(".")).enablePlugins(play.PlayScala).settings(
//    version := appVersion,
//    libraryDependencies ++= clientDependencies
//    // playScalaSettings,
//    //playAssetsDirectories <+= baseDirectory / "foo"
//    //pipelineStages := Seq(rjs)
//  ).dependsOn(common, customerMgmt)
//    .aggregate(common, customerMgmt)
//
//
//}

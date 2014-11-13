import sbt.Keys._
import sbt._

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
object Build extends Build {

  scalaVersion := "2.11.2"

  val appName = "PureMVC-TypeScript-Play-Demo-EmployeeAdmin"
  val appVersion = "1.0-SNAPSHOT"

  val clientDependencies = Seq(
    "org.webjars" %% "webjars-play" % "2.3.0-2",
    //"org.webjars" % "requirejs" % "2.1.15",
    //"org.webjars" % "jquery" % "2.1.1",
    "org.webjars" % "jquery" % "1.9.1",

    //"org.webjars" % "jquery-ui" % "1.11.1",
    "org.webjars" % "jquery-ui" % "1.9.1",

    //"org.webjars" % "jqgrid" % "4.6.0",
    "org.webjars" % "jqgrid" % "4.4.5",

    "org.webjars" % "underscorejs" % "1.6.0-3"
  )

  val main = Project(appName, file(".")).enablePlugins(play.PlayJava).settings(
    version := appVersion,
    libraryDependencies ++= clientDependencies
    //playAssetsDirectories <+= baseDirectory / "foo"
    //pipelineStages := Seq(rjs)
  ) //.enablePlugins(SbtWeb)


}

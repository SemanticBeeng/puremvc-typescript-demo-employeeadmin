import _root_.sbt.Build
import _root_.sbt.Keys
import sbt._
import Keys._
import play.Project._
//import com.github.mumoshu.play2.typescript.TypeScriptPlugin._

object ApplicationBuild extends Build {

  val appName         = "sample"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
//    filters,
//    cache,
    // WebJars (i.e. client-side) dependencies
//    "org.webjars" % "requirejs" % "2.1.14-1",
//    "org.webjars" % "underscorejs" % "1.6.0-3",
//    "org.webjars" % "jquery" % "1.11.1",
//    "org.webjars" % "bootstrap" % "3.1.1-2" exclude("org.webjars", "jquery"),
//    "org.webjars" % "angularjs" % "1.2.18" exclude("org.webjars", "jquery")
  )

  val main = play.Project(appName, appVersion, appDependencies)
//    .settings(typescriptSettings: _*)
//    .settings(
//      tsOptions ++= Seq("--sourcemap")
//    )

}

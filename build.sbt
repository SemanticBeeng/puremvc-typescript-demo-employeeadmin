Root.appSettings

lazy val common = (project in file("modules/common")).enablePlugins(PlayScala)

lazy val admin = (project in file("modules/admin")).enablePlugins(PlayScala).dependsOn(common)

lazy val dashboard = (project in file("modules/dashboard")).enablePlugins(PlayScala).dependsOn(common)

lazy val customerMgmt = (project in file("modules/customerMgmt")).enablePlugins(PlayScala).dependsOn(common)

lazy val root = (project in file(".")).enablePlugins(PlayScala).
  aggregate(common, admin, dashboard, customerMgmt).
  dependsOn(common, admin, dashboard, customerMgmt)

libraryDependencies ++= Root.commonDependencies

//MochaKeys.requires += "./Setup"

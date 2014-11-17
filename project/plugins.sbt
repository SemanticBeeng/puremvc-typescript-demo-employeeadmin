
logLevel := Level.Warn

resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"

//resolvers += "Sonatype OSS Snapshots Repository" at "http://oss.sonatype.org/content/groups/public"

addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.3.6")

addSbtPlugin("com.typesafe.sbt" % "sbt-web" % "1.1.0")

//@todo addSbtPlugin("com.github.mumoshu" % "play2-typescript" % "0.3.0-RC1" changing())

addSbtPlugin("com.typesafe.sbt" % "sbt-coffeescript" % "1.0.0")

//addSbtPlugin("com.typesafe.sbt" % "sbt-less" % "1.0.0")

//addSbtPlugin("com.typesafe.sbt" % "sbt-jshint" % "1.0.1")

//addSbtPlugin("com.typesafe.sbt" % "sbt-rjs" % "1.0.4")

//addSbtPlugin("com.typesafe.sbt" % "sbt-digest" % "1.0.0")

//addSbtPlugin("com.typesafe.sbt" % "sbt-gzip" % "1.0.0")


// @todo evaluatehttps://github.com/kolloch/sbt-html-js-wrap
// @todo evaluatehttps://github.com/jmparsons/sbt-dustjs-linkedin
// @todo evaluatehttps://github.com/sbt/sbt-mocha

## [PureMVC](http://puremvc.github.com/) + [TypeScript](https://github.com/puremvc/puremvc-typescript-standard-framework/wiki) + [Play Framework](https://playframework.com/) "Single Page Application" Demo: Employee Admin (jQuery)

Demo for creating a Single Page Application with PureMVC, Play Framework and TypeScript 

## Developing, Building & running

### To generate the Intellij Idea project ready for debugging in Play
 
 $ sbt
 $ idea with-sources=yes
 
### Batch compiling TypeScript files

$ set PROJECT_HOME=c:\D\projects\...
$ cd %PROJECT_HOME%\modules\dashboard
$ ant -Dproject.dir=%PROJECT_HOME%\modules\dashboard -f ..\..\project\ts_build\build.xml

This generates

$ ls -la %PROJECT_HOME%\modules\dashboard\app\assets\javascripts\dashboard\bin

puremvc-typescript-employeeadmin-1.0-min.js
puremvc-typescript-employeeadmin-1.0.js

which is "require.js"-ed from main-dashboard.js.

## Building and running Play

$ sbt run

Open http://localhost:9000/ 

## License
* PureMVC TypeScript Demo - Employee Admin (jQuery) - Copyright © 2012 Frederic Saunier
* PureMVC AS3 Demo - Flex Employee Admin - Copyright © 2007, 2008 Clifford Hall
* PureMVC - Copyright © 2012 Futurescale, Inc.
* All rights reserved.

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  * Neither the name of Futurescale, Inc., PureMVC.org, nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
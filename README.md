## Heroku compatible websockets example

```
$ heroku create -a jake-ws-example
Creating jake-ws-example... done, region is us
http://jake-ws-example.herokuapp.com/ | git@heroku.com:jake-ws-example.git
Git remote heroku added
```

```
$ date && host jake-ws-example.herokuapp.com
Thu Aug  8 15:23:11 PDT 2013
jake-ws-example.herokuapp.com has address 23.21.166.91
```

```
$ heroku labs:enable websockets
Enabling websockets for jake-ws-example... done
WARNING: This feature is experimental and may change or be removed without notice.
For more information see: Enable websocket support
```

```
$ date && host jake-ws-example.herokuapp.com
Thu Aug  8 15:24:18 PDT 2013
jake-ws-example.herokuapp.com has address 54.235.95.147
```

```
$ git push heroku master
Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (7/7), 911 bytes, done.
Total 7 (delta 0), reused 0 (delta 0)

-----> Node.js app detected
...
-----> Launching... done, v4
       http://jake-ws-example.herokuapp.com deployed to Heroku

To git@heroku.com:jake-ws-example.git
 * [new branch]      master -> master
```

```
$ SERVER=jake-ws-example.herokuapp.com node client.js 
received: hello world!
^C
```

```
2013-08-08T22:25:11.200510+00:00 heroku[web.1]: Starting process with command `node server.js`
2013-08-08T22:25:13.198430+00:00 heroku[web.1]: State changed from starting to up
2013-08-08T22:25:50.994732+00:00 app[web.1]: received: something from the client
2013-08-08T22:25:54.784814+00:00 heroku[router]: at=info method=GET path=/path host=jake-ws-example.herokuapp.com fwd="69.181.105.52" dyno=web.1 connect=5ms service=3902ms status=101 bytes=14
```

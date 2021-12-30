"use strict";(self.webpackChunkyolo=self.webpackChunkyolo||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"merging-yap-post","metadata":{"permalink":"/blog/merging-yap-post","editUrl":"https://github.com/pjaudiomv/yapdocs/edit/main/blog/2021-08-01-merging-yap-post/index.md","source":"@site/blog/2021-08-01-merging-yap-post/index.md","title":"Merging Yap Servers","description":"Since Yap 3.0.0 (released in March 2019), it\u2019s been possible to use a single Yap server with multiple Twilio accounts.  What this means is that a service body can handle the overhead of server management while another service body retains the management of phone numbers and billing.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"yap","permalink":"/blog/tags/yap"}],"readingTime":2.01,"truncated":true,"authors":[{"name":"Danny Gershman","title":"Maintainer of Yap","url":"https://github.com/dgershman","imageURL":"https://github.com/dgershman.png","key":"dgershman"}],"nextItem":{"title":"Excluding a custom format from a Yap query","permalink":"/blog/excluding-format-post"}},"content":"Since Yap 3.0.0 (released in March 2019), it\u2019s been possible to use a single Yap server with multiple Twilio accounts.  What this means is that a service body can handle the overhead of server management while another service body retains the management of phone numbers and billing.\\n\\n\x3c!--truncate--\x3e\\n\\nYap 3 also introduced the concept of configuration precedence [https://github.com/bmlt-enabled/yap/wiki/Configuration-Precedence](https://github.com/bmlt-enabled/yap/wiki/Configuration-Precedence).  This creates the ability to manifest all kinds of powerful capability without requiring access to the config.php on the server (critical for this situation where server management is handled by someone else).  It also has the ability to set a value at regional level while the hierarchy of the BMLT automatically cascades down to the member areas.\\n\\nRecently I had to migrate my regional yap server to the zonal server.  Below is the process I followed, feel free to send an email to [help@bmlt.app](mailto:help@bmlt.app) if you\u2019d like more details.\\n\\nConsider whether you may want to take a backup and overwrite your existing Yap database, or make a copy with a new install and config to do side by side testing.  You may also want to consider setting in the database config ahead of time or afterward.  You may also want to transfer any other settings in your top level config.php to the Config settings in the admin portal.  Keep in mind that service bodies will use the hierarchy, so if you set this as a regional level all the service bodies connected will inherit them.\\n\\n1) Delete any configuration from the target yap server, use the server body IDs that would be the IDs that would be the query below:\\n\\n```sql\\nDELETE FROM config where service_body_id in (x [,x]);\\n```\\n\\n2) Begin an export from your source yap server, select only data and exclude the flags table.  See the screenshot below.  (Use a self-contained file)\\n\\n![MySQL Export](./mysql-export.png)\\n\\n3) After the file has been exported run the below on your system.  In the below example, \u201cexport.sql\u201d is the file exported from Step 2 above.\\n\\n```bash\\ncat export.sql | sed -e \u201cs/([0-9]*,/(NULL,/g\u201d > export-mod.sql\\n```\\n\\n4) Import export-mod.sql into the target yap server.  \u201cexport-mod.sql\u201d is the output from the command run locally in Step 3 above.\\n\\n5) Your phone numbers must have explicit service body overrides in order to pull configuration values from the database (you can use either override_service_body_id or override_service_body_config_id).  One changes your service body for call routing and the other selects configuration, respectively."},{"id":"excluding-format-post","metadata":{"permalink":"/blog/excluding-format-post","editUrl":"https://github.com/pjaudiomv/yapdocs/edit/main/blog/2019-05-28-excluding-format-post.md","source":"@site/blog/2019-05-28-excluding-format-post.md","title":"Excluding a custom format from a Yap query","description":"It\u2019s possible to exclude a result from Yap results by using a custom format. For example say you made a Temporary Closure format that had an ID of 2069. You could set in your config.php a custom query, which would exclude those in the response.","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"formats","permalink":"/blog/tags/formats"},{"label":"yap","permalink":"/blog/tags/yap"}],"readingTime":0.225,"truncated":false,"authors":[{"name":"Patrick Joyce","title":"Maintainer of Yap Docs","url":"https://github.com/pjaudiomv","imageURL":"https://github.com/pjaudiomv.png","key":"pjaudiomv"}],"prevItem":{"title":"Merging Yap Servers","permalink":"/blog/merging-yap-post"}},"content":"It\u2019s possible to exclude a result from Yap results by using a custom format. For example say you made a Temporary Closure format that had an ID of 2069. You could set in your `config.php` a custom query, which would exclude those in the response."}]}')}}]);
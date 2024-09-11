const e={feature:{title:"Top Feature"},discovery:"Discovery",video:{loading:"Loading video...",loading_error:"Failed to load video.",statu_pause:"Paused...",statu_waiting:"Loading...",statu_error:"Error playing video."}},t={time:"Posted on {{ time, datetimeFormat }}",heat:"{{ visit }}  hits",comments:"{{ comment }} comments"},o={time:"Posted on {{ time, datetimeFormat }}",edit_time:"Last updated on {{ editTime, datetimeFormat }}",prev:"Previous Post",next:"Next Post",visits:"{{ visit }} Views",reward:"$",license:"Attribution-NonCommercial-ShareAlike 4.0 International",copyright_template_html:{info:"# For commercial use, please contact the author for permission. For non-commercial use, please indicate the source.<br>",license:"# License: $t(post.license)<br>",author:"# Author: {{ postAuthor }} <br>",url:"# Link(URL): {{ postUrl }} <br>",source:"# Source: {{ siteName }} <br>"},word_count_toast:{content:"This post has a total of <b>{{ postWordCount }}</b> words, and is expected to take <b> {{ timeString }}</b> to read.{{ remind }}",remind:"This post is of average length, and can be read with peace of mind.",remind_normal:"This post is of average length, and can be read with peace of mind.",remind_medium:"This post is very long, it is recommended to read it in paragraphs.",remind_difficulty:"The content of this post is very outdated and may no longer apply!"},edit_time_toast:{content:"The last time this post was edited was <b>{{ sinceLastTime }}</b>.{{ remind }}",remind:"This post was recently updated, so feel free to read it with confidence!",remind_normal:"This post was recently updated, so feel free to read it with confidence!",remind_medium:"This post has not been updated for a long time, so it may no longer apply.",remind_difficulty:"The content of this post is very outdated and may no longer apply!"}},i={next:"Next Page",theend:"No more post(s)",archives:{title:"Post Archive"},categories:{title:"Post Category",item_title:"Category: {{ title }}",radar_title:"$t(page.categories.title) Radar Chart",radar_series_title:"$t(page.categories.title) Quantity"},photos:{title:"Images",all:"All"},links:{title:"Links"},moments:{title:"Log",loadmore:"Load more...",empty:"This guy is so lazy ╮(╯▽╰)╭ Noting here!!!",time:" {{ time, datetimeFormat }}"},search:{title:'Search results for " {{ title }} "',sresult:"Search result: "},tags:{title:"Tags",item:{title:"Tag: {{ title }}"}},none:{title:"There is nothing here!",search:"Didn't find what you want, look at the other ones.",notfound:"We didn't seem to find what you want. Maybe you can search for it."},author:{title:"About the Author: {{ authorName }}"}},n={number:"{{ comment }} comment(s)",number_one:"{{ comment }} comment",number_other:"{{ comment }} comments",name:"Comments |"},s={title:"Page Not Found - {{ title }}",golast:"return to previous page",gohome:"return to home page",search:"Don't worry, search in site?",search_2:"Don't worry, search in site?",searchinput:"Search..."},a={description:"My favorite thing is to leave this blank :)",login:"login",has_logged:"current logged in",info:"user info",logout:"logout"},r={wechat:"Wechat",sina:"Sina Weibo",qq:"Tencent QQ",qzone:"QZone",github:"Github",lofter:"Lofter",bili:"Bilibili",cloudmusic:"Netease Cloud Music",twitter:"Twitter",facebook:"Facebook",googleplus:"Google+",jianshu:"Jianshu",zhihu:"Zhihu",csdn:"CSDN",telegram:"Telegram",email:"Email",stackoverflow:"Stack Overflow"},c={weibo:"Share to Sina Weibo",qq:"Share to QQ",wechat:{qcode_title:"Scan QR code",help_1:'Click "Discover" and scan it',help_2:"QR code can share this to Moments"},douban:"Share to Douban",qzone:"Share to QZone",linkedin:"Share to LinkedIn"},d={change_button_text:"Switch Theme | SCHEME TOOL"},m={days:"{{ count }} day(s)",days_one:"{{ count }} day",days_other:"{{ count }} days",hours:"{{ count }} hour(s)",hours_one:"{{ count }} hour",hours_other:"{{ count }} hours",minutes:"{{ count }} minute(s)",minutes_one:"{{ count }} minute",minutes_other:"{{ count }} minutes",seconds:"{{ count }} second(s)",seconds_one:"{{ count }} second",seconds_other:"{{ count }} seconds",events:{copy:"Copied to clipboard successfully!"},copy_code:"Copy code"},l={home:e,postlist:t,post:o,page:i,comment:n,notfound:s,user:a,icon_alt:r,share:c,theme:d,common:m};export{n as comment,m as common,l as default,e as home,r as icon_alt,s as notfound,i as page,o as post,t as postlist,c as share,d as theme,a as user};

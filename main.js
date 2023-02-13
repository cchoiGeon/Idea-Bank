// 기본 세팅
const express = require("express");
const server = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// 기본 틀
const overlap = require('./overlap/overlap'); // css,css2='',body,js
const overlap_css = require('./overlap/overlap_css');
const overlap_js = require('./overlap/overlap_js');
// 홈페이지 body
const index_body = require('./index/index_body');
// 로그인,회원가입 body 및 css
const login = require('./login,register/login');
const register = require('./login,register/register');
const login_register_css = require('./login,register/login_register_css');
// 게시판 body,css 
const board_css = require('./board/board_css');
const idea_board_body = require('./board/idead_board_body');
const idea_board_write_body = require('./board/idead_board_write_body');
const inconvenience_board_body = require('./board/inconvenience_board_body');
const inconvenience_board_write_body = require('./board/inconvenience_board_write_body');
// 경매 body
const idea_auction_body = require('./auction/idea_auction_body');
const inconvenience_popularity_body = require('./auction/미정');

const db = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : '11111111',
   database : 'idea_bank'
 });
 db.connect();

var loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
<li><a class="dropdown-item" href="/register">회원가입</a></li>`;
var logoutbutton = '';  
 
function logintrueindex(req,res){
  if(req.session.login){
    loginbutton = '';
    logoutbutton = `<li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="/logout_process">로그아웃</a></li>`;
  }else{
    loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
      <li><a class="dropdown-item" href="/register">회원가입</a></li>`;
    logoutbutton = ''
  }
}

server.use(bodyParser.urlencoded({ extended: false}));
server.use(session({
   secret: 'q1321weff@45%$',
   resave: false,
   saveUninitialized: true,
   store: new FileStore()
 }));

server.get("/",(req,res)=>{
   logintrueindex(req,res)
   res.send(overlap(overlap_css,'',index_body,overlap_js,loginbutton,logoutbutton));
});

server.get("/idea_auction",(req,res)=>{
   res.send(overlap(overlap_css,'',idea_auction_body,overlap_js,loginbutton,logoutbutton));
});

server.get("/inconvenience_popularity",(req,res)=>{
   res.send(overlap(overlap_css,'',inconvenience_popularity_body,overlap_js,loginbutton,logoutbutton));
});
// 게시판
server.get("/idea_board",(req,res)=>{ // 1페이지,2페이지 나눠서 i값이 10 단위로 끊어서 보여주기
   db.query('SELECT * FROM idea_board',function(err,idea_board){
      var a = `<tbody>`
      for(let i=0; i<idea_board.length; i++){
         var b = idea_board[i].title;
         var c = idea_board[i].writer;
         a+=`
         <tr>
            <td>${i+1}</td>
               <th>
                  <a href="#!">${b}</a>
               </th>
            <td>${c}</td>
         </tr>
     `
      }
      a+=`</tbody>`
      res.send(overlap(overlap_css,board_css,idea_board_body(a),overlap_js,loginbutton,logoutbutton));
   })
});

server.get("/inconvenience_board",(req,res)=>{
   res.send(overlap(overlap_css,board_css,inconvenience_board_body,overlap_js,loginbutton,logoutbutton));
});
// 게시판 -> 글쓰기
server.get("/idea_board_write",(req,res)=>{
   res.send(overlap(overlap_css,board_css,idea_board_write_body,overlap_js,loginbutton,logoutbutton));
});
server.post("/idea_board_write/process",(req,res)=>{
   let post = req.body
   console.log(req.session.userid,post.idea_content)
   db.query('INSERT INTO idea_board(writer,title,content,time) VALUES(?,?,?,NOW())',[req.session.userid,post.idea_title,post.idea_content],function(err,result){
      return res.redirect('/idea_board');
   });
});

server.get("/inconvenience_board_write",(req,res)=>{
   res.send(overlap(overlap_css,board_css,inconvenience_board_write_body,overlap_js,loginbutton,logoutbutton));
});
// 로그인
server.get("/login",(req,res)=>{
   res.send(login(login_register_css,overlap_js));
})
server.post("/login/process",(req,res)=>{
   let post = req.body;
   db.query('SELECT * FROM register',function(err,register){
      if(err){
        res.redirect('/login');
        return false;
      }
      for(let i = 0; i < register.length; i++){
        if(register[i].id === post.id && register[i].password === post.password){
         req.session.userid = register[i].id;
         req.session.userpassword = register[i].password;
         req.session.username = register[i].name;
         req.session.login = true;
         req.session.registerId = null;
         req.session.save(function(){
           return res.redirect('/');
         });
        }
        return false;
      }
      return res.redirect('/login');
    });
})
server.get("/logout_process",(req,res) => {
   req.session.destroy(function(err){
     return res.redirect('/');
   })
 });
// 회원가입
server.get("/register",(req,res)=>{
   res.send(register(login_register_css,overlap_js));
})
server.post("/register/process",(req,res)=>{
   let post = req.body
   console.log(post.id,post.password,post.name,post.phone)
   db.query('SELECT * FROM register',function(err2,register){
      for(let i = 0; i < register.length; i++){
        if(register[i].id == post.id){
          res.write("<script>alert('This ID is already in use.')</script>");
          return res.write("<script>window.location='/register'</script>");;
        }
      }
      db.query('INSERT INTO register(id,password,name,phone) VALUES(?,?,?,?)',[post.id,post.password,post.name,post.phone],function(err,result){
         return res.redirect('/login');
      })
    });
})
server.listen(3000);
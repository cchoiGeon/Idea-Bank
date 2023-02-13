const express = require("express");
const server = express();
const mysql = require('mysql');

const overlap = require('./overlap/overlap'); // css,css2='',body,js
const overlap_css = require('./overlap/overlap_css');
const overlap_js = require('./overlap/overlap_js');

const index_body = require('./index/index_body');

const login = require('./login,register/login');
const register = require('./login,register/register');
const login_register_css = require('./login,register/login_register_css');

const board_css = require('./board/board_css');
const idea_board_body = require('./board/idead_board_body');
const idea_board_write_body = require('./board/idead_board_write_body');
const inconvenience_board_body = require('./board/inconvenience_board_body');
const inconvenience_board_write_body = require('./board/inconvenience_board_write_body');

const idea_auction_body = require('./auction/idea_auction_body');
const inconvenience_popularity_body = require('./auction/미정');

server.get("/",(req,res)=>{
   res.send(overlap(overlap_css,'',index_body,overlap_js));
});

server.get("/idea_auction",(req,res)=>{
   res.send(overlap(overlap_css,'',idea_auction_body,overlap_js));
});

server.get("/inconvenience_popularity",(req,res)=>{
   res.send(overlap(overlap_css,'',inconvenience_popularity_body,overlap_js));
});
// 게시판
server.get("/idea_board",(req,res)=>{
   res.send(overlap(overlap_css,board_css,idea_board_body,overlap_js));
});

server.get("/inconvenience_board",(req,res)=>{
   res.send(overlap(overlap_css,board_css,inconvenience_board_body,overlap_js));
});
// 게시판 -> 글쓰기
server.get("/idea_board_write",(req,res)=>{
   res.send(overlap(overlap_css,board_css,idea_board_write_body,overlap_js));
});

server.get("/inconvenience_board_write",(req,res)=>{
   res.send(overlap(overlap_css,board_css,inconvenience_board_write_body,overlap_js));
});
// 로그인
server.get("/login",(req,res)=>{
   res.send(login(login_register_css,overlap_js));
})
// 회원가입
server.get("/register",(req,res)=>{
   res.send(register(login_register_css,overlap_js));
})
server.listen(3000);
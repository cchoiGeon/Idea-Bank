var a = function(css,css2,body,js,loginfalse=`<li><a class="dropdown-item" href="/login">로그인</a></li>
<li><a class="dropdown-item" href="/register">회원가입</a></li>`,logout=""){
   return `
   <!DOCTYPE html>
   <html lang="en">
       <head>
           <meta charset="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
           <meta name="description" content="" />
           <meta name="author" content="" />
           <title>Idea Bank</title>
           <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
           <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
           ${css}
           ${css2}
       </head>
       <body class="d-flex flex-column h-100">
           <main class="flex-shrink-0">
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                   <div class="container px-5">
                       <a class="navbar-brand" href="/">Idea Bank</a>
                       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                       <div class="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                               <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">아이디어</a>
                                   <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                       <li><a class="dropdown-item" href="/idea_board">아이디어 게시판</a></li>
                                       <li><a class="dropdown-item" href="/idea_auction">아이디어 경매</a></li>
                                   </ul>
                               </li>
                               <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">불편한 점</a>
                                   <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                       <li><a class="dropdown-item" href="/inconvenience_board">불편한 점 게시판</a></li>
                                       <li><a class="dropdown-item" href="/inconvenience_popularity">불편한 점 채택</a></li>
                                   </ul>
                               </li>
                               <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">로그인</a>
                                   <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                       ${loginfalse}
                                       ${logout}
                                   </ul>
                               </li>
                           </ul>
                       </div>
                   </div>
               </nav>
               ${body}
           </main>
           <!-- Footer-->
           <footer class="bg-dark py-4 mt-auto">
               <div class="container px-5">
                   <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                       <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2022</div></div>
                       <div class="col-auto">
                           <a class="link-light small" href="#!">Privacy</a>
                           <span class="text-white mx-1">&middot;</span>
                           <a class="link-light small" href="#!">Terms</a>
                           <span class="text-white mx-1">&middot;</span>
                           <a class="link-light small" href="#!">Contact</a>
                       </div>
                   </div>
               </div>
           </footer>
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
           ${js}
       </body>
   </html>
   `   
} 
module.exports = a;
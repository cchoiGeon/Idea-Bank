var a =`
<section class="notice">
   <div class="page-title">
         <div class="container">
            <h3>아이디어 게시판 글쓰기</h3>
         </div>
   </div>
   <form action="idea_board_write/process" method="post" enctype="multipart/form-data">
      <table border='1' class="table" id="sanyoung">
         <tr>
               <th colspan="2">
                  아이디어 게시판
               </th>
         </tr>
         <tr>
               <td >
                  <input type="text" name="idea_title" placeholder="제목을 입력하세요." style="width: 100%">
               </td>
         </tr>
         <tr>
               <td>
                  <div class="input-group mb-3">
                     <input type="file" name="imgs" class="form-control" id="inputGroupFile02">
                     <label class="input-group-text" for="inputGroupFile02">사진 선택</label>
                  </div>
               </td>
         </tr>
         <tr>
               <td colspan="2" height=400>
                  <textarea name="idea_content" placeholder="내용을 입력하세요." style="width: 500%; height: 100%"></textarea>
               </td>
         </tr>
         <tr>
               <td colspan="2" align=right>
                  <button type="submit">글쓰기</button>
                  <button type="button"><a href="/idea_board" style="text-decoration-line: none; color: black">뒤로가기</a></button>
               </td>
         </tr>
      </table>
   </form>
</section>
`
module.exports = a;
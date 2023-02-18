var a = (page,title,writer,content,allcomments) => `
<section class="notice">
    <div class="page-title">
        <div class="container">
            <div id="board-list">
                <form action="/idea_board/${writer}/page/${page}/title/${title}/post" method="post">
                    <table border='1' class="table" id="sanyoung">
                        
                    <thead>
                        <tr>
                        
                            <th>
                                제목 : ${page}/${title}
                            </th>
                        </tr>
                        <tr>
                            <td >
                                글쓴이 : ${writer}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                사진?
                            </td>
                        <tr>
                            <td>
                                내용 : ${content}
                            </td>
                        </tr>
                    </thead>
                        ${allcomments}
                    <tfoot>
                        <tr>
                            <td colspan="2">
                                <label>댓글쓰기 : </label>
                                <textarea name="comments" placeholder="내용을 입력하세요." style="width: 100%; height: 100%"></textarea>
                                <input type="submit" value="댓글달기">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align=right>
                                <button type="button"><a href="/idea_board" style="text-decoration-line: none; color: black">뒤로가기</a></button>
                            </td>
                        </tr>
                    </tfoot>
                    </table>
                </form>
            </div>
        </div>
    </div>
</section>
`
module.exports = a;
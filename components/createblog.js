export const createblog = () => {
    return `
    <div class="login-form" style="width: 350px; ">
        <form  id="createblogId">
        <h2 class="text-center">Create Blog</h2>
        <div class="form-group" >
            <input type="text" class="form-control" name="title" placeholder=" Blog Title">
            </div>
            <div class="form-group">
            <textarea name="content" class="form-control" style="height: 200px" placeholder=" Content ..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-sm" style="width: 180px; ">Create Blog</button>
        </form>
        </div>
        `;
}
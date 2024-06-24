export const login = () => {
    return `
     <div class="login-form">
        <form id="loginId">
            <h2 class="text-center">Log in</h2>
            <div class="form-group">
                <input type="text" name="email" class="form-control" placeholder="Email" required="required">
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="Password" required="required">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-sm" style="width: 80px;">Log in</button>
            </div>
        </form>
  
        <button type="submit" id="loginGoogleId" class="btn btn-primary btn-sm" style="width: 150px;">Log in With Google</button>
    </div>
    `;
}
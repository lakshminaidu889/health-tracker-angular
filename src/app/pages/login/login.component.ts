login() {
  if (!this.auth.login(this.username, this.password)) {
    this.error = 'Invalid credentials';
  } else {
    this.router.navigate(['/dashboard']);
  }
}

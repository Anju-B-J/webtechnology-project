document.getElementById('login-btn').addEventListener('click', function() {
    alert('Logged in!');
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'inline-block';
  });
  
  document.getElementById('logout-btn').addEventListener('click', function() {
    alert('Logged out!');
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-btn').style.display = 'inline-block';
  });
  
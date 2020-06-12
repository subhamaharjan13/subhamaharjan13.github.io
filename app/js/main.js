fetch("https://api.github.com/users/subhamaharjan13")
        .then(response => response.json())
        .then(function(data){
            console.log(data)

            document.getElementById('profilePicture').src = data['avatar_url']
            document.getElementById('fullName').textContent = data['name']
            document.getElementById('mainContainer').hidden = false
            document.getElementById('loading').hidden = true
            
            fetch("https://api.github.com/users/subhamaharjan13/repos")
                .then(response => response.json())
                .then(function(repo_data){
                    console.log(repo_data)
                    var olList = '';
                    for(let i=0; i<repo_data.length; i++){
                        
                        olList += '<li><a target="_blank" href="' + repo_data[i]['html_url'] + '">' + repo_data[i]['name'] + '</a></li>'                        
                    }
                    var u = document.getElementById('repos-list');
                    u.innerHTML='<ol>' + olList + '</ol>'
                })
            .catch(function(error) {
                console.log('Looks like there was a problem: \n', error);
            });
        })
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
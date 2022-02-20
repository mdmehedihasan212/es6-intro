document.getElementById('add-border').addEventListener('click', function () {
    const containerFriends = document.getElementById('friend-container');
    containerFriends.style.border = '3px solid red';
});

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'red';
    };
}

function addFriend() {
    const addMoreFnd = document.getElementById('friend-container');
    const friendAdd = document.createElement('div');
    friendAdd.classList.add('friend');
    friendAdd.innerHTML = `
    <h3 class="friend-name">My friends Bahadur</h3>
            <p>Lorem ipsum dolor sit amet.</p>
    `;
    addMoreFnd.appendChild(friendAdd);
}
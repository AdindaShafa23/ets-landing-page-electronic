let registeredMembers = [];

document.getElementById('member-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    registeredMembers.push({ name, email });
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    const membersTableBody = document.getElementById('members-table').getElementsByTagName('tbody')[0];
    membersTableBody.innerHTML = '';
    registeredMembers.forEach((member) => {
        const row = membersTableBody.insertRow();
        const nameCell = row.insertCell();
        const emailCell = row.insertCell();
        nameCell.innerHTML = member.name;
        emailCell.innerHTML = member.email;
    });

    alert('Form submitted successfully!');
});
document.getElementById('member-menu').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const memberSection = document.getElementById('member-section');
    memberSection.style.display = memberSection.style.display === 'none' ? 'block' : 'none';
});
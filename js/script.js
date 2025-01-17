const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

teamMembers.forEach(function(members) {
    console.log(`Name: ${members.name}`);
    console.log(`Role: ${members.role}`);
    console.log(`Image: ${members.image}`);
    });

const container = document.getElementById('team');
    teamMembers.forEach(function(member) {
        const memberInfo = document.createElement('div');
        memberInfo.innerHTML = `Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`;
        container.append(memberInfo);
    });
    
// Preview uploaded pictures
const pictureInput = document.getElementById('pictures');
const picturePreview = document.getElementById('picturePreview');

pictureInput.addEventListener('change', () => {
	picturePreview.innerHTML = '';

	const files = pictureInput.files;
	if (files.length === 0) return;

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		if (!file.type.startsWith('image/')) continue;

		const img = document.createElement('img');
		img.src = URL.createObjectURL(file);
		picturePreview.appendChild(img);
	}
});

// Preview uploaded files
const fileInput = document.getElementById('files');
const filePreview = document.getElementById('filePreview');

fileInput.addEventListener('change', () => {
	filePreview.innerHTML = '';

	const files = fileInput.files;
	if (files.length === 0) return;

	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		const link = document.createElement('a');
		link.href = URL.createObjectURL(file);
		link.textContent = file.name;
		filePreview.appendChild(link);
	}
});

// Add and remove milestones
const addMilestoneButton = document.getElementById('addMilestone');
const milestonesDiv = document.getElementById('milestones');

let milestoneCounter = 1;

addMilestoneButton.addEventListener('click', () => {
	milestoneCounter++;

	const milestoneDiv = document.createElement('div');
	milestoneDiv.classList.add('milestone');

	const dateLabel = document.createElement('label');
	dateLabel.htmlFor = `milestoneDate${milestoneCounter}`;
	dateLabel.textContent = 'Date:';
	milestoneDiv.appendChild(dateLabel);

	const dateInput = document.createElement('input');
	dateInput.type = 'date';
	dateInput.id = `milestoneDate${milestoneCounter}`;
	dateInput.name = 'milestoneDate[]';
	dateInput.classList.add('milestoneDate');
	milestoneDiv.appendChild(dateInput);

	const descriptionLabel = document.createElement('label');
	descriptionLabel.htmlFor = `milestoneDescription${milestoneCounter}`;
	descriptionLabel.textContent = 'Description:';
	milestoneDiv.appendChild(descriptionLabel);

	const descriptionInput = document.createElement('input');
	descriptionInput.type = 'text';
	descriptionInput.id = `milestoneDescription${milestoneCounter}`;
	descriptionInput.name = 'milestoneDescription[]';
	descriptionInput.classList.add('milestoneDescription');
	milestoneDiv.appendChild(descriptionInput);

	const removeButton = document.createElement('button');
	removeButton.type = 'button';
	removeButton.classList.add('removeMilestone');
	removeButton.textContent = 'Remove';
	removeButton.addEventListener('click', () => {
		milestoneDiv.remove();
	});
	milestoneDiv.appendChild(removeButton);

	milestonesDiv.appendChild(milestoneDiv);
});

// Submit form
const projectForm = document.getElementById('projectForm');

projectForm.addEventListener('submit', (event) => {
	event.preventDefault();

	// TODO: Implement form submission logic here

	alert('Project submitted!');
});
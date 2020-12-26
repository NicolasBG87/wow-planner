const steps = [{
    id: 1,
    title: 'Adding players',
    label: 'Add player by clicking on a spec in the menu on the left',
}, {
    id: 2,
    title: 'Adding players',
    label: 'Add player by dragging it to the board',
}, {
    id: 3,
    title: 'Deleting players',
    label: 'Delete a player by right clicking on it inside of the board',
}, {
    id: 4,
    title: 'Toggle lines',
    label: 'You can turn on/off the lines around player from the page header',
}, {
    id: 5,
    title: 'Export plan',
    label: 'Export your plan as image by clicking on the button in the header'
}, {
    id: 6,
    title: 'Reset plan',
    label: 'You can reset the planner by clicking on the button in the header'
}, {
    id: 7,
    title: 'Well done',
    label: 'Enjoy the planner'
}];

const progress = {
    progress: 0,
    total: 6,
    done: false,
    steps
};

export default progress;
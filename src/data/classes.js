const classes = [{
    id: 'demonhunter',
    label: 'Demon Hunter',
    specs: [{
        id: 'havoc',
        label: 'Havoc',
        role: 'meleeDps'
    }, {
        id: 'vengeance',
        label: 'Vengeance',
        role: 'tank'
    }]
}, {
    id: 'druid',
    label: 'Druid',
    specs: [{
        id: 'balance',
        label: 'Balance',
        role: 'rangeDps'
    }, {
        id: 'feral',
        label: 'Feral',
        role: 'meleeDps'
    }, {
        id: 'guardian',
        label: 'Guardian',
        role: 'tank'
    }, {
        id: 'restoration',
        label: 'Restoration',
        role: 'healer'
    }]
}, {
    id: 'hunter',
    label: 'Hunter',
    specs: [{
        id: 'beastmastery',
        label: 'Beast Mastery',
        role: 'rangeDps'
    }, {
        id: 'marksmanship',
        label: 'Marksmanship',
        role: 'rangeDps'
    }, {
        id: 'survival',
        label: 'Survival',
        role: 'meleeDps'
    }]
}, {
    id: 'mage',
    label: 'Mage',
    specs: [{
        id: 'fire',
        label: 'Fire',
        role: 'rangeDps'
    }, {
        id: 'frost',
        label: 'Frost',
        role: 'rangeDps'
    }, {
        id: 'arcane',
        label: 'Arcane',
        role: 'rangeDps'
    }]
}, {
    id: 'monk',
    label: 'Monk',
    specs: [{
        id: 'brewmaster',
        label: 'Brewmaster',
        role: 'tank'
    }, {
        id: 'mistweaver',
        label: 'Mistweaver',
        role: 'healer'
    }, {
        id: 'windwalker',
        label: 'Windwalker',
        role: 'meleeDps'
    }]
}, {
    id: 'paladin',
    label: 'Paladin',
    specs: [{
        id: 'holy',
        label: 'Holy',
        role: 'healer'
    }, {
        id: 'protection',
        label: 'Protection',
        role: 'tank'
    }, {
        id: 'retribution',
        label: 'Retribution',
        role: 'meleeDps'
    }]
}, {
    id: 'priest',
    label: 'Priest',
    specs: [{
        id: 'shadow',
        label: 'Shadow',
        role: 'rangeDps'
    }, {
        id: 'discipline',
        label: 'Discipline',
        role: 'healer'
    }, {
        id: 'holy',
        label: 'Holy',
        role: 'healer'
    }]
}, {
    id: 'rogue',
    label: 'Rogue',
    specs: [{
        id: 'assassination',
        label: 'Assassination',
        role: 'meleeDps'
    }, {
        id: 'outlaw',
        label: 'Outlaw',
        role: 'meleeDps'
    }, {
        id: 'subtlety',
        label: 'Subtlety',
        role: 'meleeDps'
    }]
}, {
    id: 'shaman',
    label: 'Shaman',
    specs: [{
        id: 'elemental',
        label: 'Elemental',
        role: 'rangeDps'
    }, {
        id: 'enhancement',
        label: 'Enhancement',
        role: 'meleeDps'
    }, {
        id: 'restoration',
        label: 'Restoration',
        role: 'healer'
    }]
}, {
    id: 'warlock',
    label: 'Warlock',
    specs: [{
        id: 'affliction',
        label: 'Affliction',
        role: 'rangeDps'
    }, {
        id: 'demonology',
        label: 'Demonology',
        role: 'rangeDps'
    }, {
        id: 'destruction',
        label: 'Destruction',
        role: 'rangeDps'
    }]
}, {
    id: 'warrior',
    label: 'Warrior',
    specs: [{
        id: 'arms',
        label: 'Arms',
        role: 'meleeDps'
    }, {
        id: 'fury',
        label: 'Fury',
        role: 'meleeDps'
    }, {
        id: 'protection',
        label: 'Protection',
        role: 'tank'
    }]
}];

const get = (query) => {
    return classes.reduce((acc, curr) => {
        const specs = curr.specs.filter(item => item.role === query);

        if (specs.length) {
            specs.forEach(spec => {
                acc.push({
                    classID: curr.id,
                    classLabel: curr.label,
                    specID: spec.id,
                    specLabel: spec.label
                });
            });
        }

        return acc;
    }, []);
};

const getTanks = () => get('tank');
const getHealers = () => get('healer');
const getMeleeDps = () => get('meleeDps');
const getRangeDps = () => get('rangeDps');

export {
    getTanks,
    getHealers,
    getMeleeDps,
    getRangeDps
};
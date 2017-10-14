/**
 * Use preval forl listing all files
 * I didn't find a way to make preval exporting require without calling it
 */

// const fs = require('fs')
// const path = require('path')
// const folders = fs
//   .readdirSync(path.resolve(__dirname, '../../assets/images/'))
//   .filter(file => path.extname(file) === '' && file !== '.DS_Store')

// const PICTURES = folders.reduce((acc, folder) => {
//   acc[folder] = fs
//     .readdirSync(path.resolve(__dirname, `../../assets/images/${folder}/`))
//     .filter(file => file !== '.DS_Store')
//     .map(file => `require("../../assets/images/${folder}/${file}")`)
//   return acc
// }, {})

module.exports = {
  PICTURES: {
    a: [
      {
        title: 'Aigle',
        picture: require('../../assets/images/a/aigle.jpeg')
      },
      {
        title: 'Autruche',
        picture: require('../../assets/images/a/autruche.jpeg')
      }
    ],
    b: [
      {
        title: 'Batman',
        picture: require('../../assets/images/b/batman.jpg')
      }
    ],
    c: [
      {
        title: 'Chat',
        picture: require('../../assets/images/c/chat.jpeg')
      }
    ],
    d: [
      {
        title: 'Dauphin',
        picture: require('../../assets/images/d/dauphin.jpeg')
      },
      {
        title: 'Dromadaire',
        picture: require('../../assets/images/d/dromadaire.jpeg')
      }
    ],
    e: [
      {
        title: 'Elephant',
        picture: require('../../assets/images/e/elephant.jpeg')
      },
      {
        title: 'Escargot',
        picture: require('../../assets/images/e/escargot.jpeg')
      }
    ],
    f: [
      {
        title: 'Faon',
        picture: require('../../assets/images/f/faon.jpeg')
      }
    ],
    g: [
      {
        title: 'Grenouille',
        picture: require('../../assets/images/g/grenouille.jpeg')
      },
      {
        title: 'Girafe',
        picture: require('../../assets/images/g/girafe.jpeg')
      }
    ],
    h: [
      {
        title: 'Hérisson',
        picture: require('../../assets/images/h/herisson.jpeg')
      },
      {
        title: 'Hiboux',
        picture: require('../../assets/images/h/owl.jpeg')
      }
    ],
    i: [
      {
        title: 'Iguane',
        picture: require('../../assets/images/i/iguana.jpg')
      }
    ],
    j: [
      {
        title: 'Jaune',
        picture: require('../../assets/images/j/jaune.png')
      }
    ],
    k: [
      {
        title: 'Kangourou',
        picture: require('../../assets/images/k/kangourou.jpg')
      }
    ],
    l: [
      {
        title: 'Lapin',
        picture: require('../../assets/images/l/lapin.jpg')
      },
      {
        title: 'Lion',
        picture: require('../../assets/images/l/lion.jpg')
      }
    ],
    m: [
      {
        title: 'Moineau',
        picture: require('../../assets/images/m/moineau.jpg')
      },
      {
        title: 'Mouton',
        picture: require('../../assets/images/m/mouton.jpg')
      }
    ],
    n: [
      {
        title: 'Noeud',
        picture: require('../../assets/images/n/noeud.jpg')
      }
    ],
    o: [
      {
        title: 'Oie',
        picture: require('../../assets/images/o/oie.jpg')
      },
      {
        title: 'Ours',
        picture: require('../../assets/images/o/ours.jpg')
      }
    ],
    p: [
      {
        title: 'Panda',
        picture: require('../../assets/images/p/panda.jpg')
      },
      {
        title: 'Paon',
        picture: require('../../assets/images/p/paon.jpg')
      }
    ],
    q: [
      {
        title: 'Quatre',
        picture: require('../../assets/images/q/quatre.png')
      }
    ],
    r: [
      {
        title: 'Renard',
        picture: require('../../assets/images/r/renard.jpg')
      }
    ],
    s: [
      {
        title: 'Singe',
        picture: require('../../assets/images/s/singe.jpg')
      }
    ],
    t: [
      {
        title: 'Tigre',
        picture: require('../../assets/images/t/tigre.jpeg')
      }
    ],
    u: [
      {
        title: 'Usine',
        picture: require('../../assets/images/u/usine.jpg')
      }
    ],
    v: [
      {
        title: 'Vache',
        picture: require('../../assets/images/v/vache.jpg')
      }
    ],
    w: [
      {
        title: 'Woody',
        picture: require('../../assets/images/w/woody.jpg')
      }
    ],
    x: [
      {
        title: 'Xylophone',
        picture: require('../../assets/images/x/xylophone.jpg')
      }
    ],
    y: [
      {
        title: 'Yaourt',
        picture: require('../../assets/images/y/yaourt.jpg')
      }
    ],
    z: [
      {
        title: 'Zèbre',
        picture: require('../../assets/images/z/zebre.jpg')
      }
    ]
  }
}

import { Question } from '../types';

const describingUI: Question[] = [
  {
    question: 'Quel est le rôle principal de la bibliothèque React ?',
    answers: [
      { text: 'Gestion de la base de données', isCorrect: false },
      { text: "Création d'interfaces utilisateur", isCorrect: true },
      { text: 'Sécurité des applications web', isCorrect: false },
      { text: 'Optimisation des performances', isCorrect: false },
    ],
    theme: 'React Basics',
    difficulty: 'easy',
  },
  {
    question:
      "Quelle est l'extension de syntaxe utilisée par React pour représenter le balisage ?",
    answers: [
      { text: 'HTML', isCorrect: false },
      { text: 'XML', isCorrect: false },
      { text: 'JSX', isCorrect: true },
      { text: 'JSON', isCorrect: false },
    ],
    theme: 'JSX',
    difficulty: 'easy',
  },
  {
    question:
      "Comment appelle-t-on les informations passées d'un composant parent à un composant enfant dans React ?",
    answers: [
      { text: 'States', isCorrect: false },
      { text: 'Hooks', isCorrect: false },
      { text: 'Props', isCorrect: true },
      { text: 'Contexts', isCorrect: false },
    ],
    theme: 'Props',
    difficulty: 'medium',
  },
  {
    question:
      "Quelle est l'utilité des clés (key) dans une liste d'éléments en React ?",
    answers: [
      {
        text: 'Identifier de manière unique chaque élément de la liste',
        isCorrect: true,
      },
      { text: 'Appliquer des styles CSS', isCorrect: false },
      { text: 'Transmettre des données entre composants', isCorrect: false },
      { text: 'Gérer les événements', isCorrect: false },
    ],
    theme: 'Keys',
    difficulty: 'medium',
  },
  {
    question:
      'Quelle méthode de JavaScript est couramment utilisée pour afficher plusieurs composants similaires en React ?',
    answers: [
      { text: 'filter()', isCorrect: false },
      { text: 'map()', isCorrect: true },
      { text: 'reduce()', isCorrect: false },
      { text: 'forEach()', isCorrect: false },
    ],
    theme: 'Rendering',
    difficulty: 'hard',
  },
  {
    question: 'Pourquoi est-il important de garder les composants React purs ?',
    answers: [
      {
        text: "Pour améliorer les performances de l'application",
        isCorrect: false,
      },
      {
        text: 'Pour éviter les bugs et comportements imprévisibles',
        isCorrect: true,
      },
      { text: 'Pour faciliter le styling des composants', isCorrect: false },
      {
        text: 'Pour garantir la compatibilité avec les navigateurs anciens',
        isCorrect: false,
      },
    ],
    theme: 'Pure Components',
    difficulty: 'hard',
  },
  {
    question: "Qu'est-ce qu'un composant pur en React ?",
    answers: [
      { text: "Un composant qui n'a pas d'état", isCorrect: false },
      { text: "Un composant qui n'a pas de props", isCorrect: false },
      {
        text: 'Un composant qui renvoie le même résultat avec les mêmes props',
        isCorrect: true,
      },
      { text: 'Un composant sans méthodes de cycle de vie', isCorrect: false },
    ],
    theme: 'Pure Components',
    difficulty: 'medium',
  },
  {
    question:
      "Quelle méthode est utilisée pour mettre à jour l'état dans un composant fonctionnel ?",
    answers: [
      { text: 'setState', isCorrect: false },
      { text: 'useState', isCorrect: true },
      { text: 'updateState', isCorrect: false },
      { text: 'changeState', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'easy',
  },
  {
    question:
      'Comment appelle-t-on une fonction qui permet de rendre des composants en React ?',
    answers: [
      { text: 'useEffect', isCorrect: false },
      { text: 'render', isCorrect: true },
      { text: 'useRender', isCorrect: false },
      { text: 'useLayoutEffect', isCorrect: false },
    ],
    theme: 'Rendering',
    difficulty: 'medium',
  },
  {
    question:
      'Quelle méthode du cycle de vie est appelée après que le composant a été monté en React ?',
    answers: [
      { text: 'componentDidUpdate', isCorrect: false },
      { text: 'componentWillUnmount', isCorrect: false },
      { text: 'componentDidMount', isCorrect: true },
      { text: 'componentWillMount', isCorrect: false },
    ],
    theme: 'Lifecycle',
    difficulty: 'hard',
  },
  {
    question:
      "Comment appelle-t-on une méthode permettant d'exécuter du code après le rendu en React avec des composants fonctionnels ?",
    answers: [
      { text: 'componentDidMount', isCorrect: false },
      { text: 'useEffect', isCorrect: true },
      { text: 'useCallback', isCorrect: false },
      { text: 'useMemo', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'medium',
  },
  {
    question:
      "Que permet d'éviter l'utilisation de clés uniques pour les éléments d'une liste en React ?",
    answers: [
      { text: 'Les erreurs de compilation', isCorrect: false },
      { text: 'Les bugs de performance', isCorrect: false },
      {
        text: "Les erreurs de rendu et les incohérences de l'interface",
        isCorrect: true,
      },
      { text: 'Les conflits de style', isCorrect: false },
    ],
    theme: 'Keys',
    difficulty: 'medium',
  },
  {
    question:
      'Quel hook permet de gérer les effets de bord dans un composant fonctionnel React ?',
    answers: [
      { text: 'useState', isCorrect: false },
      { text: 'useEffect', isCorrect: true },
      { text: 'useContext', isCorrect: false },
      { text: 'useReducer', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'easy',
  },
  {
    question:
      'Que renvoie la méthode render() dans un composant de classe React ?',
    answers: [
      { text: 'Un objet JSON', isCorrect: false },
      { text: 'Un élément DOM', isCorrect: false },
      { text: "Une structure de données décrivant l'UI", isCorrect: true },
      { text: 'Une fonction', isCorrect: false },
    ],
    theme: 'Rendering',
    difficulty: 'hard',
  },
  {
    question:
      'Quel hook est utilisé pour gérer un état local dans un composant fonctionnel React ?',
    answers: [
      { text: 'useState', isCorrect: true },
      { text: 'useEffect', isCorrect: false },
      { text: 'useRef', isCorrect: false },
      { text: 'useContext', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'easy',
  },
  {
    question:
      'Quel hook permet de mémoriser une valeur calculée uniquement si les dépendances changent ?',
    answers: [
      { text: 'useMemo', isCorrect: true },
      { text: 'useEffect', isCorrect: false },
      { text: 'useCallback', isCorrect: false },
      { text: 'useState', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'medium',
  },
  {
    question:
      'Comment React manipule-t-il le DOM pour améliorer les performances ?',
    answers: [
      { text: 'En utilisant des Web Workers', isCorrect: false },
      { text: 'En utilisant le DOM virtuel', isCorrect: true },
      { text: 'En utilisant des iframes', isCorrect: false },
      { text: 'En utilisant des Shadow DOMs', isCorrect: false },
    ],
    theme: 'Virtual DOM',
    difficulty: 'medium',
  },
  {
    question:
      "Quelle méthode du cycle de vie est déclenchée juste avant le démontage d'un composant ?",
    answers: [
      { text: 'componentDidUpdate', isCorrect: false },
      { text: 'componentWillUnmount', isCorrect: true },
      { text: 'componentWillUpdate', isCorrect: false },
      { text: 'componentDidMount', isCorrect: false },
    ],
    theme: 'Lifecycle',
    difficulty: 'medium',
  },
  {
    question:
      'Quel hook permet de créer une référence mutable dans un composant fonctionnel React ?',
    answers: [
      { text: 'useState', isCorrect: false },
      { text: 'useRef', isCorrect: true },
      { text: 'useEffect', isCorrect: false },
      { text: 'useContext', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'easy',
  },
  {
    question:
      "Comment peut-on optimiser les performances d'un composant fonctionnel en évitant les rendus inutiles ?",
    answers: [
      { text: 'En utilisant useCallback et useMemo', isCorrect: true },
      { text: 'En utilisant uniquement useState', isCorrect: false },
      { text: "En évitant d'utiliser des hooks", isCorrect: false },
      { text: 'En utilisant des composants de classe', isCorrect: false },
    ],
    theme: 'Performance',
    difficulty: 'hard',
  },
  {
    question:
      "Quel hook permet d'exécuter du code après chaque rendu (montage, mise à jour, et démontage) ?",
    answers: [
      { text: 'useEffect', isCorrect: true },
      { text: 'useLayoutEffect', isCorrect: false },
      { text: 'useState', isCorrect: false },
      { text: 'useReducer', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'medium',
  },
  {
    question:
      'Quelle est la différence principale entre useEffect et useLayoutEffect ?',
    answers: [
      {
        text: 'useLayoutEffect est synchrone et useEffect est asynchrone',
        isCorrect: true,
      },
      {
        text: 'useEffect est synchrone et useLayoutEffect est asynchrone',
        isCorrect: false,
      },
      {
        text: 'useEffect est utilisé pour les effets de bord et useLayoutEffect pour le layout',
        isCorrect: false,
      },
      { text: "Il n'y a aucune différence", isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'hard',
  },
  {
    question:
      'Quel hook est utilisé pour gérer un état complexe basé sur une logique de mise à jour ?',
    answers: [
      { text: 'useState', isCorrect: false },
      { text: 'useEffect', isCorrect: false },
      { text: 'useReducer', isCorrect: true },
      { text: 'useMemo', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'medium',
  },
  {
    question:
      'Quel attribut est utilisé pour spécifier les éléments enfants dans un composant React ?',
    answers: [
      { text: 'props.children', isCorrect: true },
      { text: 'props.elements', isCorrect: false },
      { text: 'props.nodes', isCorrect: false },
      { text: 'props.content', isCorrect: false },
    ],
    theme: 'Props',
    difficulty: 'easy',
  },
  {
    question:
      "Que se passe-t-il lorsqu'on appelle setState avec un objet partiellement mis à jour ?",
    answers: [
      { text: "L'état précédent est complètement remplacé", isCorrect: false },
      {
        text: "L'état précédent est fusionné avec le nouvel état",
        isCorrect: true,
      },
      { text: "L'état précédent reste inchangé", isCorrect: false },
      { text: 'Une erreur est levée', isCorrect: false },
    ],
    theme: 'State',
    difficulty: 'medium',
  },
  {
    question:
      "Quel hook permet d'accéder à la valeur précédente d'une variable d'état ?",
    answers: [
      { text: 'usePrevious', isCorrect: false },
      { text: 'useRef', isCorrect: true },
      { text: 'useEffect', isCorrect: false },
      { text: 'useMemo', isCorrect: false },
    ],
    theme: 'Hooks',
    difficulty: 'hard',
  },
];

export default describingUI;

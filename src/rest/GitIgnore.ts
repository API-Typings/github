type Languages = readonly [
	'Actionscript',
	'Ada',
	'Agda',
	'Android',
	'AppEngine',
	'AppceleratorTitanium',
	'ArchLinuxPackages',
	'Autotools',
	'C',
	'C++',
	'CFWheels',
	'CMake',
	'CUDA',
	'CakePHP',
	'ChefCookbook',
	'Clojure',
	'CodeIgniter',
	'CommonLisp',
	'Composer',
	'Concrete5',
	'Coq',
	'CraftCMS',
	'D',
	'DM',
	'Dart',
	'Delphi',
	'Drupal',
	'EPiServer',
	'Eagle',
	'Elisp',
	'Elixir',
	'Elm',
	'Erlang',
	'ExpressionEngine',
	'ExtJs',
	'Fancy',
	'Finale',
	'ForceDotCom',
	'Fortran',
	'FuelPHP',
	'GWT',
	'GitBook',
	'Go',
	'Godot',
	'Gradle',
	'Grails',
	'Haskell',
	'IGORPro',
	'Idris',
	'JENKINS_HOME',
	'Java',
	'Jboss',
	'Jekyll',
	'Joomla',
	'Julia',
	'KiCAD',
	'Kohana',
	'Kotlin',
	'LabVIEW',
	'Laravel',
	'Leiningen',
	'LemonStand',
	'Lilypond',
	'Lithium',
	'Lua',
	'Magento',
	'Maven',
	'Mercury',
	'MetaProgrammingSystem',
	'Nim',
	'Node',
	'OCaml',
	'Objective-C',
	'Opa',
	'OracleForms',
	'Packer',
	'Perl',
	'Perl6',
	'Phalcon',
	'PlayFramework',
	'Plone',
	'Prestashop',
	'Processing',
	'PureScript',
	'Python',
	'Qooxdoo',
	'Qt',
	'R',
	'ROS',
	'Rails',
	'RhodesRhomobile',
	'Ruby',
	'Rust',
	'SCons',
	'Sass',
	'Scala',
	'Scheme',
	'Scrivener',
	'Sdcc',
	'SeamGen',
	'SketchUp',
	'Smalltalk',
	'SugarCRM',
	'Swift',
	'Symfony',
	'SymphonyCMS',
	'TeX',
	'Terraform',
	'Textpattern',
	'TurboGears2',
	'Typo3',
	'Umbraco',
	'Unity',
	'UnrealEngine',
	'VVVV',
	'VisualStudio',
	'Waf',
	'WordPress',
	'Xojo',
	'Yeoman',
	'Yii',
	'ZendFramework',
	'Zephir',
	'gcov',
	'nanoc',
	'opencart',
	'stella'
];

// SECTION Endpoints

/**
 * List all templates available to pass as an option when creating a repository.
 *
 * @endpoint [GET](https://docs.github.com/en/rest/reference/gitignore#get-all-gitignore-templates) `/gitignore/templates`
 */
export interface GetGitIgnoreTemplates {
	response: Languages;
}

/**
 * The API also allows fetching the source of a single template. Use the raw media type to get the
 * raw contents.
 *
 * @endpoint [GET](https://docs.github.com/en/rest/reference/gitignore#get-a-gitignore-template) `/gitignore/templates/{name}`
 */
export interface GetGitIgnoreTemplate {
	parameters: {
		name: Languages[number];
	};

	response: {
		name: Languages[number];
		source: string;
	};
}

// !SECTION

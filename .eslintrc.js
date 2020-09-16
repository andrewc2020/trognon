module.exports ={
    root:true,
    parser:'@typescript-eslint/parser',
    parserOptions:{
        ecmaFeatures:{jsx:true}
    },
    extends:[
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-ally/recommended'
    ],
    rules:{
        'prettier/prettier':[
            "error",{},{"usePrettierrc":true}
        ],
        'react/prop-types':'off',
    }
    }
}
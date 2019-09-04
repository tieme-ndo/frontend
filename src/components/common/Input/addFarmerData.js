export const personalInfo = {
  title: {
    elementType: 'select',
    name: 'title',
    labelName: 'Title',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Miss',
          displayValue: 'Miss'
        },
        {
          value: 'Mrs',
          displayValue: 'Mrs'
        },
        {
          value: 'Mr',
          displayValue: 'Mr'
        },
        {
          value: 'Chief',
          displayValue: 'Chief'
        }
      ]
    },
    value: '',
    valid: true
  },
  surname: {
    elementType: 'input',
    name: 'surname',
    type: 'text',
    labelName: 'Surname',
    value: '',
    valid: false,
    touched: false
  },
  first_name: {
    elementType: 'input',
    name: 'first_name',
    type: 'text',
    labelName: 'First Name',
    value: '',
    valid: false,
    touched: false
  },
  middle_name: {
    elementType: 'input',
    name: 'middle_name',
    type: 'text',
    labelName: 'Middle Name',
    value: '',
    valid: false,
    touched: false
  },
  image_url: {
    elementType: 'input',
    name: 'image_url',
    type: 'file',
    labelName: 'Farmer Image',
    imageUrl: '',
    valid: false,
    touched: false
  },
  marital_status: {
    elementType: 'select',
    name: 'marital_status',
    labelName: 'Marital Status',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Single',
          displayValue: 'Single'
        },
        {
          value: 'Married',
          displayValue: 'Married'
        },
        {
          value: 'Widowed',
          displayValue: 'Widowed'
        },
        {
          value: 'Divorced',
          displayValue: 'Divorced'
        }
      ]
    },
    value: '',
    valid: true
  },
  gender: {
    elementType: 'select',
    name: 'gender',
    labelName: 'Gender',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Male',
          displayValue: 'Male'
        },
        {
          value: 'Female',
          displayValue: 'Female'
        },
        {
          value: 'Others',
          displayValue: 'Others'
        }
      ]
    },
    value: '',
    valid: true
  },
  place_of_birth: {
    elementType: 'input',
    name: 'place_of_birth',
    type: 'text',
    labelName: 'Place Of Birth',
    value: '',
    valid: false,
    touched: false
  },
  date_of_birth: {
    elementType: 'input',
    name: 'date_of_birth',
    type: 'date',
    labelName: 'Date Of Birth',
    value: '',
    valid: false,
    touched: false
  },
  id_type: {
    elementType: 'select',
    name: 'id_type',
    labelName: 'Id Type',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Voters Card',
          displayValue: 'Voters Card'
        },
        {
          value: 'NHIS',
          displayValue: 'NHIS'
        },
        {
          value: 'National ID',
          displayValue: 'National ID'
        },
        {
          value: 'Others',
          displayValue: 'Others'
        }
      ]
    },
    value: '',
    valid: true
  },
  id_number: {
    elementType: 'input',
    name: 'id_number',
    type: 'number',
    labelName: 'Id Number',
    value: '',
    valid: false,
    touched: false
  },
  district: {
    elementType: 'input',
    name: 'district',
    type: 'text',
    labelName: 'District',
    value: '',
    valid: false,
    touched: false
  },
  region: {
    elementType: 'input',
    name: 'region',
    type: 'text',
    labelName: 'Region',
    value: '',
    valid: false,
    touched: false
  },
  community_name: {
    elementType: 'input',
    name: 'community_name',
    type: 'text',
    labelName: 'Community Name',
    value: '',
    valid: false,
    touched: false
  },
  house_name: {
    elementType: 'input',
    name: 'house_name',
    type: 'text',
    labelName: 'House Name',
    value: '',
    valid: false,
    touched: false
  },
  house_number: {
    elementType: 'input',
    name: 'house_number',
    type: 'number',
    labelName: 'House Number',
    value: '',
    valid: false,
    touched: false
  },
  nearest_landmark: {
    elementType: 'input',
    name: 'nearest_landmark',
    type: 'text',
    labelName: 'Nearest Landmark',
    value: '',
    valid: false,
    touched: false
  },
  Phone_1: {
    elementType: 'input',
    name: 'Phone_1',
    type: 'number',
    labelName: ' Phone 1',
    value: '',
    valid: false,
    touched: false
  },
  Phone_2: {
    elementType: 'input',
    name: 'Phone_2',
    type: 'number',
    labelName: 'Phone 2',
    value: '',
    valid: false,
    touched: false
  },
  education_level: {
    elementType: 'select',
    name: 'education_level',
    labelName: 'Education Level',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Tertiary',
          displayValue: 'Tertiary'
        },
        {
          value: 'SHS',
          displayValue: 'SHS'
        },
        {
          value: 'JHS',
          displayValue: 'JHS'
        },
        {
          value: 'Primary',
          displayValue: 'Primary'
        },
        {
          value: 'Not Educated',
          displayValue: 'Not Educated'
        }
      ]
    },
    value: '',
    valid: true
  },
  occupation: {
    elementType: 'input',
    name: 'occupation',
    type: 'text',
    labelName: 'Occupation',
    value: '',
    valid: false,
    touched: false
  },
  expected_income_per_month: {
    elementType: 'select',
    name: 'expected_income_per_month',
    labelName: 'Expected Income Per Month',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Less than GHC 500',
          displayValue: 'Less than GHC 500'
        },
        {
          value: '501 to GHC 1,000',
          displayValue: '501 to GHC 1,000'
        },
        {
          value: 'More than GHC 1,000',
          displayValue: 'More than GHC 1,000'
        }
      ]
    },
    value: '',
    valid: true
  },
  major_source_of_income_name: {
    elementType: 'input',
    name: 'major_source_of_income_name',
    type: 'text',
    labelName: 'Major Source Of Income',
    value: '',
    valid: false,
    touched: false
  },
  major_source_of_income_amount: {
    elementType: 'input',
    name: 'major_source_of_income_amount',
    type: 'number',
    labelName: 'Major Source Of Income Amount',
    value: '',
    valid: false,
    touched: false
  },
  minor_source_of_income_name: {
    elementType: 'input',
    name: 'minor_source_of_income_name',
    type: 'text',
    labelName: 'Minor Source Of Income',
    value: '',
    valid: false,
    touched: false
  },
  minor_source_of_income_amount: {
    elementType: 'input',
    name: 'minor_source_of_income_amount',
    type: 'number',
    labelName: 'Minor Source Of Income Amount',
    value: '',
    valid: false,
    touched: false
  }
};

export const familyInfo = {
  family_size: {
    elementType: 'input',
    name: 'family_size',
    type: 'number',
    labelName: 'Family Size',
    value: '',
    valid: false,
    touched: false
  },
  number_of_dependant: {
    elementType: 'input',
    name: 'number_of_dependant',
    type: 'number',
    labelName: 'Number Of Dependant',
    value: '',
    valid: false,
    touched: false
  },
  highest_level_of_dependent: {
    elementType: 'select',
    name: 'highest_level_of_dependent',
    labelName: 'Highest Level Of Education Level',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Tertiary',
          displayValue: 'Tertiary'
        },
        {
          value: 'SHS',
          displayValue: 'SHS'
        },
        {
          value: 'JHS',
          displayValue: 'JHS'
        },
        {
          value: 'Primary',
          displayValue: 'Primary'
        },
        {
          value: 'Not Educated',
          displayValue: 'Not Educated'
        }
      ]
    },
    value: '',
    valid: true
  },
  family_income_per_month: {
    elementType: 'select',
    name: 'family_income_per_month',
    labelName: 'Family Income Per Month',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Less than GHC 500',
          displayValue: 'Less than GHC 500'
        },
        {
          value: '501 to GHC 1,000',
          displayValue: '501 to GHC 1,000'
        },
        {
          value: 'More than GHC 1,000',
          displayValue: 'More than GHC 1,000'
        }
      ]
    },
    value: '',
    valid: true
  }
};

export const guarantor = {
  grt_title: {
    elementType: 'select',
    name: 'grt_title',
    labelName: 'Title',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Miss',
          displayValue: 'Miss'
        },
        {
          value: 'Mrs',
          displayValue: 'Mrs'
        },
        {
          value: 'Mr',
          displayValue: 'Mr'
        },
        {
          value: 'Chief',
          displayValue: 'Chief'
        }
      ]
    },
    value: '',
    valid: true
  },
  grt_surname: {
    elementType: 'input',
    name: 'grt_surname',
    type: 'text',
    labelName: 'Surname',
    value: '',
    valid: false,
    touched: false
  },
  grt_first_name: {
    elementType: 'input',
    name: 'grt_first_name',
    type: 'text',
    labelName: 'First Name',
    value: '',
    valid: false,
    touched: false
  },
  grt_gender: {
    elementType: 'select',
    name: 'grt_gender',
    labelName: 'Gender',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select'
        },
        {
          value: 'Male',
          displayValue: 'Male'
        },
        {
          value: 'Female',
          displayValue: 'Female'
        },
        {
          value: 'Others',
          displayValue: 'Others'
        }
      ]
    },
    value: '',
    valid: true
  },
  grt_relations: {
    elementType: 'input',
    name: 'grt_relations',
    type: 'text',
    labelName: 'Relations',
    value: '',
    valid: false,
    touched: false
  },
  grt_residential_address: {
    elementType: 'input',
    name: 'grt_residential_address',
    type: 'text',
    labelName: 'Residential Address',
    value: '',
    valid: false,
    touched: false
  },
  grt_occupation: {
    elementType: 'input',
    name: 'grt_occupation',
    type: 'text',
    labelName: 'Occupation',
    value: '',
    valid: false,
    touched: false
  },
  grt_phone: {
    elementType: 'input',
    name: 'grt_phone',
    type: 'text',
    labelName: 'Phone',
    value: '',
    valid: false,
    touched: false
  },
  grt_district: {
    elementType: 'input',
    name: 'grt_district',
    type: 'text',
    labelName: 'District',
    value: '',
    valid: false,
    touched: false
  },
  grt_region: {
    elementType: 'input',
    name: 'grt_region',
    type: 'text',
    labelName: 'Region',
    value: '',
    valid: false,
    touched: false
  }
};

export const farmInfo = {
  number_of_acres: {
    elementType: 'input',
    name: 'number_of_acres',
    type: 'number',
    labelName: 'Number Of Acres',
    value: '',
    valid: false,
    touched: false
  },
  location_of_farm: {
    elementType: 'input',
    name: 'location_of_farm',
    type: 'text',
    labelName: 'Location Of Farm',
    value: '',
    valid: false,
    touched: false
  },
  farm_nearest_landmark: {
    elementType: 'input',
    name: 'farm_nearest_landmark',
    type: 'text',
    labelName: 'Farm Nearest landmark',
    value: '',
    valid: false,
    touched: false
  },
  crops_cultivated: {
    elementType: 'checkbox',
    name: 'crops_cultivated',
    type: 'checkbox',
    labelName: 'Crops Cultivated',
    elementConfig: {
      options: [
        'Maize',
        'Rice',
        'Sorghum',
        'Millet',
        'Groundnuts',
        'Beans',
        'SoyaBeans',
        'Yam',
        'Guinea Corn'
      ]
    },
    selected: [],
    value: '',
    checked: '',
    valid: false,
    touched: false
  },
  // crops_cultivated_optional: {
  //   elementType: 'input',
  //   name: 'crops_cultivated_optional',
  //   type: 'text',
  //   labelName: 'Crops Cultivated Optional',
  //   value: '',
  //   valid: false,
  //   touched: false,
  // },
  animals_or_birds: {
    elementType: 'checkbox',
    name: 'animals_or_birds',
    type: 'checkbox',
    labelName: 'Animals/Birds Own',
    elementConfig: {
      options: [
        'Goat',
        'Cow',
        'Sheep',
        'Pig',
        'Donkey',
        'Fowl',
        'Guinea Pig',
        'Turkey'
      ]
    },
    selected: [],
    value: '',
    checked: '',
    valid: false,
    touched: false
  }
  // animal_birds_other: {
  //   elementType: 'input',
  //   name: 'animal_birds_optional',
  //   type: 'text',
  //   labelName: 'Others Animals (optional)',
  //   value: '',
  //   valid: false,
  //   touched: false,
  // },
};

/** @format */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class AddFarmer extends Component {
  state = {
    farmer: {},
  }
  render() {
    return (
      <div>
        <header>
          <div>Logo</div>
          <div>
            <button>Logout</button>
          </div>
        </header>

        <section>
          <button>Back</button>
          <hr />

          <form action="">
            <div>
              <h1>Personnel Information</h1>
              <div>
                <label for="">
                  Title:
                  <select id="" name="title">
                    <option value="">Miss</option>
                    <option value="">Mrs</option>
                    <option value="">Mr</option>
                    <option value="">Chief</option>
                  </select>
                </label>
              </div>
              <label for="">
                Surname: <input type="text" name="surname" />{' '}
              </label>
              <label for="">
                First Name: <input type="text" name="first_name" />{' '}
              </label>
              <label for="">
                Middle Name: <input type="text" name="middle_name" />{' '}
              </label>
              <div>
                <label for="">
                  Marital Status:
                  <select name="marital_status" id="">
                    <option value="">Single</option>
                    <option value="">Married</option>
                    <option value="">Widowed</option>
                    <option value="">Divorced</option>
                  </select>
                </label>
              </div>
              <div>
                <label for="">
                  Gender:
                  <select name="gender" id="">
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Others</option>
                  </select>
                </label>
              </div>
              <label for="">
                Date of Birth: <input type="text" name="place_of_birth" />{' '}
              </label>
              <div>
                <label for="">
                  Id Type:
                  <select id="" name="id_type">
                    <option value="">Voter\'s Card</option>
                    <option value="">NHIS</option>
                    <option value="">National ID</option>
                    <option value="">Others</option>
                  </select>
                </label>
              </div>
              <label for="">
                ID Number: <input type="text" name="id_number" />{' '}
              </label>
              <label for="">
                District: <input type="text" name="district" />{' '}
              </label>
              <label for="">
                Region: <input type="text" name="region" />{' '}
              </label>
              <label for="">
                Community: <input type="text" name="community_name" />{' '}
              </label>
              <label for="">
                House Name: <input type="text" name=" house_name" />{' '}
              </label>
              <label for="">
                House No: <input type="text" name=" house_number" />{' '}
              </label>
              <label for="">
                Nearest Landmark: <input type="text" name="nearest_landmark" />{' '}
              </label>
              <label for="">
                Phone 1: <input type="text" name="Phone_1" />{' '}
              </label>
              <label for="">
                Phone 2: <input type="text" name="Phone_2" />{' '}
              </label>
              <label for="">
                Education: <input type="text" />{' '}
              </label>
              <div>
                <label for="">
                  Educational Level:
                  <select id="" name="education_level">
                    <option value="">Tertiary</option>
                    <option value="">SHS</option>
                    <option value="">JHS</option>
                    <option value="">Primary</option>
                    <option value="">Not Educated</option>
                  </select>
                </label>
              </div>
              <label for="">
                Occupation: <input type="text" name="occupation" />{' '}
              </label>
              <div>
                <label for="">
                  Expected Income Per Month:
                  <select id="" name="expected_income_per_month">
                    <option value="">Less than GHC 500</option>
                    <option value="">501 to GHC 1,000</option>
                    <option value="">More than GHC 1,000</option>
                  </select>
                </label>
              </div>
              <label for="">
                Major Income Source: <input type="text" name="major_source_of_income" />{' '}
              </label>
              <label for="">
                Amount: <input type="text" name="major_source_of_income" />{' '}
              </label>
              <label for="">
                Major Income Source: <input type="text" name="minor_source_of_income" />{' '}
              </label>
              <label for="">
                Amount: <input type="text" name="minor_source_of_income_amount" />{' '}
              </label>
            </div>

            <div>
              <h1>Family</h1>
              <label for="">
                Family Size: <input type="text" name="family_size" />{' '}
              </label>
              <label for="">
                Number Of Dependant: <input type="text" name="number_of_dependant" />{' '}
              </label>
              <label for="">
                Highest Level Of Dependant: <input type="text" name="highest_level_of_dependent" />{' '}
              </label>
              <div>
                <label for="">
                  Family Income Per Month:
                  <select id="" name="family_income_per_month">
                    <option value="">Less than GHC 500</option>
                    <option value="">501 to GHC 1,000</option>
                    <option value="">More than GHC 1,000</option>
                  </select>
                </label>
              </div>
            </div>

            <div>
              <h1>Guarantor</h1>
              <div>
                <label for="">
                  Title:
                  <select id="" name="title">
                    <option value="">Miss</option>
                    <option value="">Mrs</option>
                    <option value="">Mr</option>
                    <option value="">Chief</option>
                  </select>
                </label>
              </div>
              <label for="">
                Surname: <input type="text" name="surname" />{' '}
              </label>
              <label for="">
                First Name: <input type="text" name="first_name" />{' '}
              </label>
              <div>
                <label for="">
                  Gender:
                  <select name="gender" id="">
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Others</option>
                  </select>
                </label>
              </div>
              <label for="">
                Relationship: <input type="text" name="relationship" />{' '}
              </label>
              <label for="">
                residential_address: <input type="text" name="residential_address" />{' '}
              </label>
              <label for="">
                Occupation: <input type="text" name="occupation" />{' '}
              </label>
              <label for="">
                phone: <input type="text" name="phone" />{' '}
              </label>
              <label for="">
                district: <input type="text" name="district" />{' '}
              </label>
              <label for="">
                region: <input type="text" name="region" />{' '}
              </label>
            </div>

            <div>
              <h1>Farm Information</h1>
              <label for="">
                Number Of Acres: <input type="text" name="number_of_acres" />{' '}
              </label>
              <label for="">
                Location Of Farm: <input type="text" name="location_of_farm" />{' '}
              </label>
              <label for="">
                Nearest Landmark: <input type="text" name="nearest_landmark" />{' '}
              </label>
              <label for="">
                Crops Cultivated: <input type="text" name="crops_cultivated" />{' '}
              </label>
              <label for="">
                Animals Or Birds: <input type="text" name="animals_or_birds" />{' '}
              </label>
            </div>
          </form>
        </section>
      </div>
    )
  }
}
// AddFarmer.propTypes = {
//   cards: propTypes.array
// };

export default AddFarmer

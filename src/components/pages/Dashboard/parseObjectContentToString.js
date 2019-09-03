const parseObjectContentToString = obj => {
  return obj.map(farmer => ({
    name: `${farmer.personalInfo.first_name} ${farmer.personalInfo.surname}`,
    communityName: farmer.personalInfo.community_name,
    farmLocation: farmer.farmInfo.location_of_farm,
    phoneNumber: farmer.personalInfo.Phone_1,
    guarantorName: `${farmer.guarantor.grt_first_name} ${farmer.guarantor.grt_surname}`,
    guarantorPhoneNumber: farmer.guarantor.grt_phone
  }));
};

export default parseObjectContentToString;

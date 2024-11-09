import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userImg: null,
  isSubMenuShow: false,
  isColorMenuShow: false,
  isEditMenuShow: false,
  fontSize: "100%",
  selectedFamily: "",
  selectedBgColor: "#0773e8",
  resumeValue: {
    picture: true,
    summary: true,
    location: true,
    birthDate: false,
    nationality: false,
    martialStatus: false,
    email: true,
    phoneNumber: false,
    website: false,
    linkedin: false,
    github: false,
    behance: false,
    name: true,
    roleProfession: true,
    workExperience: true,
    education: true,
    hardSkill: true,
    softSkill: false,
    languages: false,
    hobbies: false,
  },
  hardSkill: [{ nameSkill: "" }],
  softSkill: [{ nameSkill: "" }],
  mainLanguages: [{ nameLanguage: "", rating: 3 }],
  hobbies: [{ nameHobby: "" }],
  workExperience: [{ position: "", role: "", fromUntil: "", description: "" }],
  educationDegree: [{ title: "", school: "", fromUntil: "" }],
  tempPath: "temp-1",
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setUserImage(state, action) {
      state.userImg = action.payload;
    },
    toggleSubMenu(state) {
      state.isSubMenuShow = !state.isSubMenuShow;
    },
    // Ajoutez d'autres reducers pour gérer l'état...
    addHardSkill(state) {
      state.hardSkill.push({ nameSkill: "" });
    },
    removeHardSkill(state, action) {
      state.hardSkill.splice(action.payload, 1);
    },
    // Répétez pour softSkill, mainLanguages, hobbies, etc.
    handleCheckBox(state, action) {
      const { key, value } = action.payload;
      state.resumeValue[key] = value;
    },
    handleFamilyChange(state, action) {
      state.selectedFamily = action.payload;
    },
  },
});

export const {
  setUserImage,
  toggleSubMenu,
  addHardSkill,
  removeHardSkill,
  handleCheckBox,
  handleFamilyChange,
} = resumeSlice.actions;

export default resumeSlice.reducer;
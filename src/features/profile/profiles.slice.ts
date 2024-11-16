import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Profile {
  authUserId: string;
  username: string;
  givenName: string;
  familyName: string;
  avatarURL: string;
  bannerURL: string;
  gender: string;
  headline: string;
  about: string;
  location: string;
  followers: number;
  following: number;
  skills: string[];
}

export interface ProfilesState {
  profiles: Record<string, Profile>;
  selectedProfile: Profile | null;
}

const initialState: ProfilesState = {
  profiles: {},
  selectedProfile: null,
};

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfiles(state, action: PayloadAction<Profile[]>) {
      state.profiles = action.payload.reduce(
        (acc, profile) => {
          acc[profile.username] = profile;
          return acc;
        },
        {} as Record<string, Profile>
      );
    },
    setProfile(state, action: PayloadAction<Profile>) {
      const profile = action.payload;

      state.profiles[profile.username] = {
        ...profile,
        followers: 0,
        following: 0,
        bannerURL:
          'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1740&h=435&fit=crop&crop=edges&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        avatarURL: `https://img.freepik.com/premium-photo/animated-illustration-funny-thanksgiving-turkey-thanksgiving-day-character_692702-3985.jpg?w=900`,
        headline:
          'Expanding skills in Full Stack Web Development | Open to opportunities',
        location: 'Jaipur, Rajasthan, India',
        gender: 'MALE',
        about: `👋 Hey there! I'm Chirag, currently on a journey to expand my skills in Full Stack Development while actively seeking new work opportunities. Whether it's diving deeper into backend technologies or mastering the latest frontend frameworks, I'm committed to staying at the forefront of the industry while exploring exciting career prospects.\n💻 I'm skilled in JavaScript, React.js, Node.js, express.js, CSS, and Next.js. From creating user-friendly interfaces to building powerful APIs, I've got the skills to make it happen.\n🚀 Beyond coding, I find joy in gaming, where creativity and strategy meet. I'm also passionate about exploring and staying updated with the latest technologies.`,
        skills: ['JavaScript', 'React.js', 'Node.js', 'CSS', 'Next.js'],
      };
    },
    setSelectedProfile(state, action: PayloadAction<string>) {
      state.selectedProfile = state.profiles[action.payload] || null;
    },
    updateProfile(state, action: PayloadAction<Profile>) {
      state.profiles[action.payload.username] = action.payload;
    },
    resetProfilesState() {
      return initialState;
    },
  },
});

export const {
  setProfiles,
  setProfile,
  setSelectedProfile,
  updateProfile,
  resetProfilesState,
} = profilesSlice.actions;

// Selectors
export const selectProfiles = (state: RootState) => state.profiles.profiles;
export const selectSelectedProfile = (state: RootState) =>
  state.profiles.selectedProfile;

export const profilesReducer = profilesSlice.reducer;

// interface DeveloperProfile {
//     name: string
//     skill: string
//     experience: number
// }

// interface GitHubProfile {
//     createRepository(): void
// }

// class HrydamProfile implements DeveloperProfile {
//     constructor(
//         public name: string,
//         public skill: string,
//         public experience: number
//     ){}
// }

// class HrydamGitHub implements DeveloperProfile, GitHubProfile {
//     constructor(
//         public name: string,
//         public skill: string,
//         public experience: number,
//         public repository: string
//     ){}

//     createRepository(): void {
//         console.log("Repository created");
//     }
// }
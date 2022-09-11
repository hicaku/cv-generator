import { defineStore } from "pinia";

interface Section {
    header: String;
    type: String;
    name: String;
    data: Array<any>;
}

const defaultSections = [
    {
        header: "General Info",
        type: "info",
        name: "Info",
        data: [
            {
                key: "name",
                value: "John Doe",
            },
            {
                key: "title",
                value: "Frontend Developer",
            },
            {
                key: "location",
                value: "Some Location",
            },
            {
                key: "phone",
                value: "+90 500 000 00 00",
            },
            {
                key: "email",
                value: "mailname@mail.com",
            },
            {
                key: "portfolio",
                value: "portfolio.com",
            },
            {
                key: "github",
                value: "github.com/githubname",
            },
        ],
    },
    {
        header: "Summary",
        type: "text",
        name: "Summary",
        data: ["This is a summary example. You can edit or delete this section."],
    },
    {
        header: "Work Experience",
        type: "date",
        name: "Experience",
        data: [
            {
                company: "Last Company",
                title: "Frontend Developer",
                startDate: "01/2022",
                endDate: null,
                summary: "In this company, I worked as a Frontend Developer and I participated in many projects.",
            },
            {
                company: "First Company",
                title: "Junior Frontend Developer",
                startDate: "06/2021",
                endDate: "12/2021",
                summary: "In this first company, I worked as a Junior Frontend Developer and I participated in many projects.",
            },
        ],
    },
    {
        header: "Education",
        type: "date",
        name: "Education",
        data: [
            {
                school: "Some Universtity",
                department: "Some Engineering",
                startDate: "2018",
                endDate: "2022",
                gpa: 3.14,
            },
        ],
    },
    {
        header: "Skills",
        type: "rank",
        name: "Skill",
        data: [
            {
                name: "Vue.js",
                value: 9,
                summary: "I worked with Vue.js for many years.",
            },
            {
                name: "TypeScript",
                value: 6,
                summary: "I worked with TypeScript for many years.",
            },
            {
                name: "Tailwind CSS",
                value: 3,
                summary: "I am a beginner in Tailwind CSS.",
            },
        ],
    },
    {
        header: "Languages",
        type: "rank",
        name: "Language",
        data: [
            {
                name: "Turkish",
                value: 10,
            },
            {
                name: "English",
                value: 9,
            },
            {
                name: "Chinese",
                value: 2,
            },
        ],
    },
    {
        header: "Hobbies",
        type: "list",
        name: "Hobby",
        data: ["Video games", "Algorithm problems", "Sports", "Yoga"],
    },
    {
        header: "Certificates",
        type: "date",
        name: "Certificate",
        data: [
            {
                company: "A Company",
                title: "First Certificate",
                startDate: "06/2021",
                summary: "I earned this certificate in a course in A Company.",
            },
            {
                company: "B Company",
                title: "Second Certificate",
                startDate: "11/2021",
                summary: "I earned this certificate in a course in B Company.",
            },
        ],
    },
    {
        header: "References",
        type: "reference",
        name: "Reference",
        data: [
            {
                name: "Name Surname",
                title: "CEO at Company H",
                contact: "reference@mail.com",
            },
            {
                name: "Second Reference",
                title: "CTO at Company Y",
                contact: "second@mail.com",
            },
        ],
    },
];

export const useMainStore = defineStore({
    id: "store",
    state: () => ({
        activeHeader: "edit" as "edit" | "preview",
        sections: JSON.parse(JSON.stringify(defaultSections)) as Array<Section>,
        alert: {
            message: "" as String,
            duration: 0 as number,
            type: null as null | "success" | "error",
        },
        confirm: {
            message: "" as String,
            onSuccess: null as any,
        },
    }),
    getters: {},
    actions: {
        deleteItem(sectionIndex: number, itemIndex: number) {
            this.sections[sectionIndex].data.splice(itemIndex, 1);
        },
        showResetSectionsDialog() {
            this.confirm = {
                message: "Are you sure to reset all your progress?",
                onSuccess: this.resetSections,
            };
        },
        resetSections() {
            this.sections = JSON.parse(JSON.stringify(defaultSections));
            this.confirm.message = "";
        },
        exportCV() {
            console.log("Will be developed soon!");
        },
        showAlert(message: String, duration: number) {
            clearTimeout(this.alert.duration);
            this.alert.message = message;
            this.alert.duration = setTimeout(() => {
                this.alert.message = "";
            }, duration);
        },
    },
    persist: true,
});
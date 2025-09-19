const listData = [
    {
        name: "Robert Fox",
        avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Feb 15, 2021",
        company: {
            name: "Dribbble",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-1.png"
        },
        offer: "$3.500",
        meeting: { status: "Scheduled", color: "success" },
    },
    {
        name: "Darlene Robertson",
        avatar: "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Apr 15, 2021",
        company: {
            name: "Netguru",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-2.png"
        },
        offer: "$2.750",
        meeting: { status: "Postponed", color: "warning" },
    },
    {
        name: "Theresa Webb",
        avatar: "https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Mar 20, 2021",
        company: {
            name: "Figma",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-3.png"
        },
        offer: "$4.200",
        meeting: { status: "Scheduled", color: "success" },
    },
    {
        name: "Kristin Watson",
        avatar: "https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Feb 15, 2021",
        company: {
            name: "Mailchimp",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-4.png"
        },
        offer: "$3.500",
        meeting: { status: "Not discussed", color: "dark" },
    },
    {
        name: "Cody Fisher",
        avatar: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Apr 10, 2021",
        company: {
            name: "Webpixels",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-5.png"
        },
        offer: "$1.500",
        meeting: { status: "Canceled", color: "danger" },
    },
    {
        name: "Robert Fox",
        avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Feb 15, 2021",
        company: {
            name: "Dribbble",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-1.png"
        },
        offer: "$3.500",
        meeting: { status: "Scheduled", color: "success" }
    },
    {
        name: "Darlene Robertson",
        avatar: "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Apr 15, 2021",
        company: {
            name: "Netguru",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-2.png"
        },
        offer: "$2.750",
        meeting: { status: "Postponed", color: "warning" }
    },
    {
        name: "Theresa Webb",
        avatar: "https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Mar 20, 2021",
        company: {
            name: "Figma",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-3.png"
        },
        offer: "$4.200",
        meeting: { status: "Scheduled", color: "success" }
    },
    {
        name: "Kristin Watson",
        avatar: "https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Feb 15, 2021",
        company: {
            name: "Mailchimp",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-4.png"
        },
        offer: "$3.500",
        meeting: { status: "Not discussed", color: "dark" }
    },
    {
        name: "Cody Fisher",
        avatar: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Apr 10, 2021",
        company: {
            name: "Webpixels",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-5.png"
        },
        offer: "$1.500",
        meeting: { status: "Canceled", color: "danger" }
    },
 
    {
        name: "Cody Fisher",
        avatar: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Apr 10, 2021",
        company: {
            name: "Webpixels",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-5.png"
        },
        offer: "$1.500",
        meeting: { status: "Canceled", color: "danger" }
    },
    {
        name: "Kristin Watson",
        avatar: "https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Feb 15, 2021",
        company: {
            name: "Mailchimp",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-4.png"
        },
        offer: "$3.500",
        meeting: { status: "Not discussed", color: "dark" }
    },
    {
        name: "Theresa Webb",
        avatar: "https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Mar 20, 2021",
        company: {
            name: "Figma",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-3.png"
        },
        offer: "$4.200",
        meeting: { status: "Scheduled", color: "success" }
    },
    {
        name: "Darlene Robertson",
        avatar: "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Apr 15, 2021",
        company: {
            name: "Netguru",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-2.png"
        },
        offer: "$2.750",
        meeting: { status: "Postponed", color: "warning" }
    },
    {
        name: "Robert Fox",
        avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Feb 15, 2021",
        company: {
            name: "Dribbble",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-1.png"
        },
        offer: "$3.500",
        meeting: { status: "Scheduled", color: "success" }
    },
    {
        name: "Cody Fisher",
        avatar: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Apr 10, 2021",
        company: {
            name: "Webpixels",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-5.png"
        },
        offer: "$1.500",
        meeting: { status: "Canceled", color: "danger" }
    },
    {
        name: "Kristin Watson",
        avatar: "https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Feb 15, 2021",
        company: {
            name: "Mailchimp",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-4.png"
        },
        offer: "$3.500",
        meeting: { status: "Not discussed", color: "dark" }
    },
    {
        name: "Theresa Webb",
        avatar: "https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Mar 20, 2021",
        company: {
            name: "Figma",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-3.png"
        },
        offer: "$4.200",
        meeting: { status: "Scheduled", color: "success" }
    },
    {
        name: "Darlene Robertson",
        avatar: "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Apr 15, 2021",
        company: {
            name: "Netguru",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-2.png"
        },
        offer: "$2.750",
        meeting: { status: "Postponed", color: "warning" }
    },
    {
        name: "Robert Fox",
        avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        date: "Feb 15, 2021",
        company: {
            name: "Dribbble",
            logo: "https://preview.webpixels.io/web/img/other/logos/logo-1.png"
        },
        offer: "$3.500",
        meeting: { status: "Scheduled", color: "success" }
    }

]

export default listData;

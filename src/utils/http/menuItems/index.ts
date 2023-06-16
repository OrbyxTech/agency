
interface menuItemsInnerItemsOptions {
    id: string,
    text: string,
    link: string
}

export interface menuItemOptions {
    title: string,
    account_text: string,
    items: Array<menuItemsInnerItemsOptions>,
}

interface menuItemsProps {
    lng: string
}

async function menuItems({ lng }: menuItemsProps): Promise<menuItemOptions> {
    return new Promise((resolve):menuItemOptions => {
        if(lng === "en") {
            resolve(
                {
                    account_text: "",
                    title: "",
                    items: [
                        {
                            "id": "0",
                            "text": "Home",
                            "link": "/"
                        },
                        {
                            "id": "1",
                            "text": "Company",
                            "link": "/company"
                        },
                        {
                            "id": "2",
                            "text": "Work",
                            "link": "/work"
                        },
                        {
                            "id": "2",
                            "text": "Blog",
                            "link": "/blog"
                        },
                        {
                            "id": "2",
                            "text": "Contact Us",
                            "link": "/contact-us"
                        }
                    ]
                }
            )
        }
        else if (lng === "fa") {
            resolve(
                {
                    "title": "Orbyx",
                    "account_text": "حساب کاربری",
                    "items": [
                        {
                            "id": "0",
                            "text": "خانه",
                            "link": "/"
                        },
                        {
                            "id": "1",
                            "text": "شرکت",
                            "link": "/company"
                        },
                        {
                            "id": "2",
                            "text": "کار",
                            "link": "/work"
                        },
                        {
                            "id": "2",
                            "text": "وبلاگ",
                            "link": "/blog"
                        },
                        {
                            "id": "2",
                            "text": "ارتباط  با ما",
                            "link": "/contact-us"
                        }
                    ]
                }
            )
        }
        return
    })
}

export default menuItems
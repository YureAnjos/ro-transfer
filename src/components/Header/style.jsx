import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
    height: 220px;
    background-color: var(--text-100);
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    .main_header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .search {
            margin-right: 1rem;
            height: 100%;
            position: relative;

            input {
                padding: 1rem 3rem;
                border: none;
                border: 2px solid var(--primary-100);
                border-radius: .25rem;
                outline: none;
                color: var(--primary-100);
                caret-color: var(--primary-100);

                &::placeholder {
                    color: var(--primary-100);
                }
            }

            svg {
                position: absolute;
                left: 1rem;
                font-size: 1.75rem;
                color: var(--primary-100);
            }
        }

        .logo {
            margin-left: 1rem;
            color: var(--primary-100);
        }
    }
`

export const HeaderNav1 = styled.nav`
    height: 60px;
    width: 100%;
    background-color: var(--primary-100);
    box-shadow: 0 2px 2px var(--primary-100);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .links {
        margin-left: 1rem;
        display: flex;
        gap: 1.25rem;
        text-transform: uppercase;
        font-weight: 400;

        a {
            transition: .7s;
            letter-spacing: -.5px;
        }

        a:hover {
            color: #e9e9e9;
        }
    }

    .account {
        margin-right: 1rem;
        text-transform: uppercase;

        button {
            background-color: white;
            color: var(--primary-100);
            border: none;
            border-radius: .25rem;
            display: flex;
            justify-content: start;
            aling-items: center;
            gap: .25rem;
            text-transform: uppercase;
            font-weight: 400;
            padding: .5rem 1rem;
            cursor: pointer;
        }
    }
`

export const HeaderNav2 = styled.nav`
    height: 60px;
    width: 100%;
    background-color: var(--primary-100);
    box-shadow: 0 2px 2px var(--primary-100);
    margin: 10px 0;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    
    .home {
        margin-left: 1rem;
        height: 40px;
        width: 40px;

        button {
            height: 100%;
            width: 100%;
            border: none;
            background-color: white;
            color: var(--primary-100);
            font-size: 1.5rem;
        }
    }

    .links {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;

        .container {
            padding: 0;
            width: auto;
            height: 40px;
            border: none;
            background: white;
            color: var(--primary-100);
            display: flex;
            justify-content: start;
            align-items: center;

            .icon1 {
                height: 40px;
                width: 40px;
                background-color: white;
                font-size: 1.25rem;
                justify-content: start;

                .container {
                    height: 33px;
                    width: 33px;
                    margin-left: 5px;
                    color: white;
                    background-color: var(--primary-100);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            
            span {
                height: 40px;
                width: 45%;
                background-color: white;
                font-size: 1.25rem;
                letter-spacing: -.25px;
                margin: 0 1rem;
            }

            .icon2 {
                height: 40px;
                width: 40px;
                background-color: white;
                color: var(--primary-100);
                font-size: 1.75rem;
                border: 2px solid var(--primary-100);
                margin: 0 auto;
            }
        }
    }
`
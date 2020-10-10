import styled from 'styled-components';
import Pemeriksaan from './../../Assets/image/background/pemeriksaan.jpg';

export const Wrapper = styled.div `
    .wrapper-beranda {
        min-height: 800px;

        .wrapper-banner-beranda {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Pemeriksaan});
            width: 100%;
            min-height: 50vw;
            background-size: 100% auto;
            background-repeat: no-repeat;

            .wrapper-title-banner-beranda{
                margin-top: 4vw;

                .title-banner-beranda {
                    font-size: 4vw;
                }
            }

            .wrapper-subtitle-banner-beranda{
                margin-top: 4vw;

                .subtitle-banner-beranda {
                    font-size: 2vw;
                }
            }

            .wrapper-button-banner-beranda{
                margin-top: 4vw;

                .button-banner-beranda{
                    font-size: 2.5vw;
                    border-radius: 20px;
                    padding: 10px 80px 10px 80px;
                }
            }
        }

        .wrapper-definisi-mtbs-beranda{
            background-color: #BDF2FF;
            padding: 20px 10px 30px 10px;

            .wrapper-title-definisi-mtbs-beranda{

                .title-definisi-mtbs-beranda{
                    font-size: 2.5vw;
                }
            }

            .wrapper-content-definisi-mtbs-beranda{
                .title-content-definisi-mtbs-berada{
                    font-size: 2.2vw;
                    margin-top: 2vw;
                }

                .text-content-definisi-mtbs-beranda{
                    font-size: 1.7vw;
                }

                .image-content-definisi-mtbs-beranda{
                    width: 20vw;
                    height: auto;
                }
            }
        }

        .wrapper-fungsi-mtbs-beranda{
            padding: 20px 10px 30px 10px;

            .wrapper-content-fungsi-mtbs-beranda{
                .title-content-fungsi-mtbs-berada{
                    font-size: 2.2vw;
                    margin-top: 5vw;
                }

                .text-content-fungsi-mtbs-beranda{
                    font-size: 1.7vw;
                }

                .image-content-fungsi-mtbs-beranda{
                    width: 30vw;
                    height: auto;
                }
            }
        }

        .wrapper-tahapan-mtbs-beranda{
            background-color: #BDF2FF;
            padding: 20px 10px 30px 10px;

            .wrapper-content-tahapan-mtbs-beranda{
                .title-content-tahapan-mtbs-beranda{
                    font-size: 2.2vw;
                }

                .text-content-tahapan-mtbs-beranda{
                    font-size: 1.7vw;
                }
            }

            .icon-tahapan-mtbs-beranda{
                display: block;
                margin-left: auto;
                margin-right: auto;
            }

            .text-tahapan-mtbs-beranda{
                font-size: 1.7vw;
            }
        }
    }
`;
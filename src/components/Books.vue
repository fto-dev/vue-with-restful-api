<template>
    <div>
        <vk-button v-if="!loading" class="uuk-margin-right" v-on:click="getBooks" >Yenile <vk-icon icon="future" class="uk-margin-small-left"></vk-icon> </vk-button>
        <vk-button v-if="loading" type="danger" >Yenilemeyi İptal Et</vk-button>


        <div >
            <h2 v-if="info" class="uk-heading-divider uk-margin-top">Tüm Kitaplar</h2>

            <div v-if="!loading && errorMessage" >
                <p class="uk-alert-danger uk-margin-small-top uk-padding-small uk-display-inline-block">{{errorMessageText}}</p>
            </div>

            <div v-if="loading">
                Loading...
            </div>
            <ul v-if="info" >
                <li v-for="item in info" :key="item.title">
                    <span class="w-100"> <b class="label">Id:</b> {{ item.id }} </span>
                    <span class="w-100"> <b class="label">Title:</b> {{ item.title }} </span>
                    <span class="w-100"> <b class="label">Description:</b> {{ item.description}} </span>
                    <!--<span v-if="item.photo" class="w-100"> Photo URL: {{ item.photo}} </span>-->
                </li>
            </ul>
            <h2 class="uk-heading-divider uk-margin-top"></h2>
        </div>

        <div class="uk-container-small uk-margin-auto">
            <form class="" @submit="formSubmit">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Kitap Ekle</legend>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Kitap Adı" v-model="bookName" >
                    </div>
                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" placeholder="Kitap Açıklaması" v-model="bookDescription"></textarea>
                    </div>
                </fieldset>
                <button class="uk-button-primary uk-padding-small" v-on:click="postBook(bookName,bookDescription)"> Ekle </button>
            </form>
        </div>

        <h2 class="uk-heading-divider uk-margin-top"></h2>

        <div class="uk-container-small uk-margin-auto">
            <form class="" @submit="formSubmit">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Kitap Değiştir</legend>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Kitap ID Numarası" v-model="bookIdChange" >
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Kitap Adı" v-model="bookNameChange" >
                    </div>
                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" placeholder="Kitap Açıklaması" v-model="bookDescriptionChange"></textarea>
                    </div>
                </fieldset>
                <button class="uk-button-primary uk-padding-small" v-on:click="putBook(bookIdChange, bookNameChange, bookDescriptionChange)">  Değiştir </button>
            </form>
        </div>

        <h2 class="uk-heading-divider uk-margin-top"></h2>

        <div class="uk-container-small uk-margin-auto">
            <form class="" @submit="formSubmit">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Kitap Sil</legend>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Kitap ID Numarası" v-model="bookIdDelete" >
                    </div>
                </fieldset>
                <button class="uk-button-primary uk-padding-small" v-on:click="deleteBook(bookIdDelete)"> Sil </button>
            </form>
        </div>

        <div class="uk-margin-large-bottom">

        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    let apiToken = 'token1';

    export default {
        name: "Books",
        data() {
            return {
                loading: true,
                info: null,
                bookName: '',
                bookNameChange: '',
                bookIdDelete: '',
                bookIdChange: '',
                bookDescription: '',
                bookDescriptionChange: '',
                errorMessageText: 'Kitaplar yüklenirken hata oluştu.',
                errorPostMessageText: 'Kitaplar eklenirken hata oluştu.',
                delete: '',
                apiUrl: 'http://book-library-api.test/api/books',
            }
        },
        mounted() {
            this.getBooks();
        },
        created: function () {},
        methods: {
            getBooks: function () {
                axios
                    .get( this.apiUrl + '?api_token='+apiToken+'' )
                    .then(response => (this.info = response.data.data, this.errorMessage = '' ))
                    .catch(
                        function (error) {
                            console.log('test get error'),
                            console.log(error),
                            this.errorMessage = true
                        }
                    )
                    .finally(() => this.loading = false)
            },
            postBook: function ( bookName, bookDescription ) {
                const params = new URLSearchParams();
                params.append('title', bookName);
                params.append('description', bookDescription);
                axios
                    .post(this.apiUrl + '?api_token='+apiToken+'&' , params )
                    .then(response => (this.info = response.data.data, this.errorMessage = '' ))
                    .catch(
                        self.errorPostMessage = true,
                    )
                    .finally(() => this.loading = false, /*this.getBooks()*/ )
            },
            putBook: function (bookIdChange, bookNameChange, bookDescriptionChange) {
                const params = new URLSearchParams();

                params.append('title', bookNameChange);
                params.append('description', bookDescriptionChange);
                axios
                    //.put(url:)
                    .put(this.apiUrl + '/' + bookIdChange + '?api_token='+apiToken+'&' , params )
                    //.then(response => (this.info = response.data.data, this.errorMessage = '' ))
                    .catch(
                        //THIS IS PUT ERROR this.errorPostMessage = true,
                    )
                    .finally(() => this.loading = false, this.getBooks())
            },
            deleteBook: function (bookIdDelete) {
                const params = new URLSearchParams();
                axios
                    .delete( this.apiUrl + '/' + bookIdDelete + '?api_token='+apiToken+'&' )
                    //.then(response => (this.delete = response, this.errorMessage = '' ))
                    .catch(
                        //THIS IS DELETE ERROR this.errorPostMessage = true,
                    )
                    .finally(() => this.loading = false, this.getBooks() )
            },
            formSubmit: function(e){
                e.preventDefault(e);
            }
        }
    }
</script>

<style lang="less" scoped >
    .w-100 {
        width: 100%;
        display: block;
        margin-bottom: 10px;
    }

    li {
        list-style-type: none;
    }

    b{
        &.label{
            min-width: 150px;
        }
    }
</style>
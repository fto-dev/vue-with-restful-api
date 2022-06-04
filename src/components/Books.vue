<template>
    <div>
        <vk-button v-if="!loading" class="uuk-margin-right" v-on:click="storageUpdate" >Yenile <vk-icon icon="future" class="uk-margin-small-left"></vk-icon> </vk-button>
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
                    <span class="w-100"> <b class="label">Başlık:</b> {{ item.title }} </span>
                    <span class="w-100"> <b class="label">Açıklama:</b> {{ item.description}} </span>
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
    import store from "storejs";

    export default {
        name: "Books",
        data() {
            return {
                loading: false,
                info: [
                    { "id": 1 , "title": "book 1", "description": "book 1 description"  },
                    { "id": 2 , "title": "book 2", "description": "book 2 description"  },
                    { "id": 3 , "title": "book 3", "description": "book 3 description"  },
                ],
                bookName: '',
                bookNameChange: '',
                bookIdDelete: '',
                bookIdChange: '',
                bookDescription: '',
                bookDescriptionChange: '',
                errorMessage: '',
                errorMessageText: 'Kitaplar yüklenirken hata oluştu.',
                errorPostMessageText: 'Kitaplar eklenirken hata oluştu.',
                delete: '',
            }
        },
        mounted() {
            this.storageUpdate();
        },
        created: function () {},
        methods: {
            storageUpdate: function () {
                store.set('books', this.info);
            },
            postBook: function ( bookName, bookDescription ) {
                if(bookName.length == 0 || bookDescription.length == 0){
                    alert('Please fill all fields')
                } else {
                    this.info.push({
                        "id": this.info[this.info.length - 1].id+1,
                        "title": bookName,
                        "description": bookDescription,
                    });
                    this.bookName = '';
                    this.bookDescription = '';
                    this.storageUpdate();
                }
            },
            putBook: function (bookIdChange, bookNameChange, bookDescriptionChange) {
                this.info.map((value) => {
                    if(bookIdChange == value.id){
                        if(bookNameChange || bookDescriptionChange){
                            this.bookIdChange = '';
                            alert(`${bookIdChange} changed`)
                        }
                        if(bookNameChange){
                            value.title = bookNameChange;
                            this.bookNameChange = '';
                        }
                        if(bookDescriptionChange) {
                            value.description = bookDescriptionChange;
                            this.bookDescriptionChange = '';
                        }
                    }
                })
            },
            deleteBook: function (bookIdDelete) {
                let found = false;
                // sure pop up
                if (confirm(`Are you sure want to remove item ? ${bookIdDelete}`)) {
                    // if select true
                    this.info.map((value,index) => {
                        // try find
                        // if find - remove
                        if(bookIdDelete == value.id){
                            this.info.splice(index, 1)
                            // else not found alert error
                            found = true
                        }
                    })

                    if(!found){
                        alert(`Not found id: ${bookIdDelete}`)
                    } else{
                        alert(`Removed id: ${bookIdDelete}`)
                        this.storageUpdate();
                        this.bookIdDelete = '';
                    }
                }

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

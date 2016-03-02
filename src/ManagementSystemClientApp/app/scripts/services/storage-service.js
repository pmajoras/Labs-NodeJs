/* global localforage */
(function () {
  'use strict';

  function StorageServiceProvider() {
    var storage = null;

    /**
     * Remove all elements in the storage.
     */
    var clear = function () {
      storage.clear();
    };

    /**
     * Returns the saved value by a key.
     *
     * @param(String) key: chave
     * @return(String): valor armazenado
     */
    var get = function (key) {
      return storage.getItem(key);
    };

    /**
     * Return the number of keys saved in the storage.
     *
     * @return(Number): storage size.
     */
    var length = function () {
      return storage.length;
    };

    /**
     * Returns the key by index
     *
     * @param(Number) index: the index
     * @return(String): The key
     */
    var key = function (index) {
      return storage.key(index);
    };

    /**
     * Remove the value from storage using a key.
     *
     * @param(String) key: the key)
     */
    var remove = function (key) {
      storage.removeItem(key);
    };

    /**
     * Returns the value by a key and then remove it.
     *
     * @param(String) key: The key
     * @return(String): The value
     */
    var pull = function (key) {
      var value = get(key);

      remove(key);

      return value;
    };

    /**
     * Set the value of a key using a key and value.
     *
     * @param(String) key: Key
     * @param(String) value: Value
     */
    var set = function (key, value) {
      storage.setItem(key, value);
    };

    // Implementação da factory
    return {
      $get: function () {

        // Seta o localForage como storage padrão
        //storage = localforage;
        storage = localStorage;

        return {
          clear: clear,
          get: get,
          length: length,
          key: key,
          pull: pull,
          remove: remove,
          set: set
        };
      },
      config: function (options) {
        var defaultOptions = {
          driver: localforage.WEBSQL,
          name: 'storage',
          version: 1.0,
          size: 4980736, // Tamanho em bytes (only for WEBSQL)
          storeName: 'keyvaluepairs',
          description: 'storage description'
        };

        options = angular.extend(options || {}, defaultOptions);

        // Configuração do localForage
        localforage.config(options);
      }
    };
  }

  angular.module('todoApp').provider('storageService', [StorageServiceProvider]);
})();
import arrayToObject from 'vuex-map-fields/src/lib/array-to-object';

function buildFieldPath(vm, fieldsObject, field, indexFields) {
    if (Array.isArray(indexFields)) {
        return indexFields.reduce(
            (path, indexField, index) => path.replace(new RegExp(`\\[=${index}\\]`), `[${vm[indexField]}]`),
            fieldsObject[field]
        );
    }

    return fieldsObject[field].replace('[]', `[${vm[indexFields]}]`);
}

export function mapDynamicFields(namespace, fields, indexFields) {
    const fieldsObject = Array.isArray(fields) ? arrayToObject(fields) : fields;

    return Object.keys(fieldsObject).reduce((prev, key) => {
        prev[key] = {
            get() {
                // 'this' refer to vue component
                const path = buildFieldPath(this, fieldsObject, key, indexFields);
                return this.$store.getters[`${namespace}/getField`](path);
            },
            set(value) {
                // 'this' refer to vue component
                const path = buildFieldPath(this, fieldsObject, key, indexFields);
                this.$store.commit(`${namespace}/updateField`, { path, value });
            }
        };

        return prev;
    }, {});
}

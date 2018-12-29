// This `require` is required when --dependency_mode=STRICT. In LOOSE mode, it is not needed.
// require('./i0');

// This `import` is required even if in LOOSE mode.
import Hello from './i0';

/**
 * @constructor
 * @extends {./i0.default} `.default` is needed, instead of `{./i0}`
 */
function SubHello() {
}

new SubHello().hello('hay!');

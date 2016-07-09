"""An import hook that notices when matplotlib.pyplot is imported, and tells IPython about it.

This avoids IPython hanging if `%matplotlib` is omitted.

This is horrible, and probably nobody should use it.
"""
import sys, os
from IPython import get_ipython

class MatplotlibFinder(object):
    """Import hook that notices when matplotlib.pyplot is imported, and tells IPython about it
    
    This avoids IPython hanging if `%matplotlib` is omitted
    """
    _called = False
    def find_module(self, fullname, path=None):
        if self._called:
            return
        # return
        if fullname not in ('pylab', 'matplotlib.pyplot'):
            return
        # Don't call me again
        self._called = True
        
        ip = get_ipython()
        if ip is None:
            return
        
        if ip.pylab_gui_select:
            return
        
        # default to inline in kernel environments
        if hasattr(ip, 'kernel'):
            print('enabling inline matplotlib')
            ip.enable_matplotlib('inline')
        else:
            print('enabling matplotlib')
            ip.enable_matplotlib()


sys.meta_path.insert(0, MatplotlibFinder())
